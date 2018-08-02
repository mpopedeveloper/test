import * as express from 'express';
import http = require('http');
import * as path from 'path';
import * as sio from 'socket.io';

export class Server {
     public app: express.Application;

     public static bootstrap(): Server {
        return new Server();
    }

     constructor() {
         this.app = express();
         this.routes();
     }

     public routes() {
         this.app.get('/', (req, res) => {
             res.sendFile(path.join(__dirname, '../client/index.html'));
         });
     }



}