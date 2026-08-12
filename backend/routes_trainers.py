from flask import Blueprint, request, jsonify
from extensions import db
from models import Trainer, TrainerReserva

trainers_bp = Blueprint("trainers", __name__, url_prefix="/api/trainers")


def _get_trainer_by_api_key():
    api_key = request.headers.get("X-Trainer-Key")
    if not api_key:
        return None
    return Trainer.query.filter_by(api_key=api_key, activo=True).first()


@trainers_bp.route("/reservas", methods=["POST"])
def crear_reserva():
    trainer = _get_trainer_by_api_key()
    if not trainer:
        return jsonify({"error": "Entrenador no válido o inactivo"}), 401

    data = request.get_json(force=True) or {}

    requeridos = ["plan_seleccionado", "nombre_completo", "correo", "whatsapp"]
    faltantes = [c for c in requeridos if not data.get(c)]
    if faltantes:
        return jsonify({"error": f"Campos faltantes: {', '.join(faltantes)}"}), 400

    reserva = TrainerReserva(
        trainer_id=trainer.id,
        plan_seleccionado=data["plan_seleccionado"],
        nombre_completo=data["nombre_completo"],
        correo=data["correo"],
        whatsapp=data["whatsapp"],
        peso_kg=data.get("peso_kg"),
        edad=data.get("edad"),
        estatura_cm=data.get("estatura_cm"),
        objetivo=data.get("objetivo"),
        plazo=data.get("plazo"),
        entrena_en=data.get("entrena_en"),
        frecuencia_semanal=data.get("frecuencia_semanal"),
        tiempo_por_sesion=data.get("tiempo_por_sesion"),
    )
    db.session.add(reserva)
    db.session.commit()

    return jsonify({"ok": True, "reserva_id": reserva.id}), 201


@trainers_bp.route("/reservas", methods=["GET"])
def listar_reservas():
    trainer = _get_trainer_by_api_key()
    if not trainer:
        return jsonify({"error": "Entrenador no válido o inactivo"}), 401

    reservas = trainer.reservas.order_by(TrainerReserva.created_at.desc()).all()
    return jsonify([
        {
            "id": r.id,
            "plan": r.plan_seleccionado,
            "nombre": r.nombre_completo,
            "correo": r.correo,
            "whatsapp": r.whatsapp,
            "estado": r.estado,
            "fecha": r.created_at.isoformat(),
            "entrena_en": r.entrena_en,
            "frecuencia_semanal": r.frecuencia_semanal,
            "tiempo_por_sesion": r.tiempo_por_sesion,
        }
        for r in reservas
    ])