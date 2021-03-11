import express from 'express';
import cors from 'cors';
import mainRoute from './route/Route';

const app = express()
 
//middleware
app.use(express.json());
app.use(cors());

//route
app.use(mainRoute);
 
app.listen(3000)