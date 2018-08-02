import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as cors from 'cors';

export class Server {
    public app: express.Application;

    /**
     * Bootstrap the application
     */

  public static bootstrap(): Server {
      return new Server();
  }

   /**
    * Constructor
    */
   constructor() {
       this.app();
       this.app.use(cors());
       this.app.options('*', cors());

       // configure application
       this.config();

       //add routes
       this.routes();
       console.log("routes");
   }

   /**
    * Create REST API routes
    */

    public api( router: express.Router) {
        let products = express.Router();
        let customer = express.Router();
        let cart = express.Router();
        let checkout = express.Router();


    }

    public config() {
        // setting nup mongoose
        const MONGO_URI = 
    }
}