from flask import Flask
from flask_cors import CORS

from config import Config
from extensions import db
from routes_trainers import trainers_bp   # NUEVO


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    CORS(app, origins=app.config["CORS_ORIGINS"])

    app.register_blueprint(trainers_bp)   # NUEVO

    @app.route("/health")
    def health():
        return {"status": "ok"}

    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True, port=5000)