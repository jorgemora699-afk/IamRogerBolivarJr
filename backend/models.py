from datetime import datetime
from extensions import db


class Trainer(db.Model):
    __tablename__ = "trainers"

    id = db.Column(db.Integer, primary_key=True)
    slug = db.Column(db.String(80), unique=True, nullable=False)
    nombre = db.Column(db.String(120), nullable=False)
    dominio = db.Column(db.String(255), unique=True, nullable=True)
    email_contacto = db.Column(db.String(120), nullable=True)
    whatsapp = db.Column(db.String(30), nullable=True)
    activo = db.Column(db.Boolean, default=True, nullable=False)
    api_key = db.Column(db.String(64), unique=True, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    reservas = db.relationship("TrainerReserva", backref="trainer", lazy="dynamic")


class TrainerReserva(db.Model):
    __tablename__ = "trainer_reservas"

    id = db.Column(db.Integer, primary_key=True)
    trainer_id = db.Column(db.Integer, db.ForeignKey("trainers.id"), nullable=False)

    plan_seleccionado = db.Column(db.String(120), nullable=False)
    nombre_completo = db.Column(db.String(160), nullable=False)
    correo = db.Column(db.String(120), nullable=False)
    whatsapp = db.Column(db.String(30), nullable=False)

    peso_kg = db.Column(db.Float, nullable=True)
    edad = db.Column(db.Integer, nullable=True)
    estatura_cm = db.Column(db.Float, nullable=True)
    objetivo = db.Column(db.String(255), nullable=True)
    plazo = db.Column(db.String(100), nullable=True)
    entrena_en = db.Column(db.String(20), nullable=True)          # 'casa' | 'gimnasio'
    frecuencia_semanal = db.Column(db.Integer, nullable=True)
    tiempo_por_sesion = db.Column(db.String(50), nullable=True)

    estado = db.Column(db.String(20), default="pendiente")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)