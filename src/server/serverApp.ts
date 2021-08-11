import path from 'path';
import express, { Application } from 'express';

export default class ServerApp {
  private port: number;
  private app: Application;

  constructor() {
    this.port = Number(process.env.PORT || 8080);

    this.app = express();

    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '/../../public/index.html'));
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log('Aplicación corriendo en el puerto:', this.port);
    });
  }
}
