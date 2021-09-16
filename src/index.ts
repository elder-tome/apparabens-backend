import "reflect-metadata";
import * as express from 'express';
import * as cors from 'cors';
import Notification from './services/Notification';
import { createConnection } from "typeorm";

import Routes from './routes';
import Mail from "./services/Mail";

const app = express();

app.use(cors());

app.use(express.json());

app.use(Routes);

app.listen(process.env.PORT || 3333);

createConnection();

const mail = new Mail(process.env.EMAIL_USER, process.env.EMAIL_PASS);

new Notification().start(mail);
