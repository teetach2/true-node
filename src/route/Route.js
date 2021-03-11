import { Router } from 'express';
import * as UserController from '../controller/UserController';
import * as UserRegController from '../controller/UserRegController';
import * as LoginController from '../controller/LoginController';

const mainRoute = Router(); 

mainRoute.post("/userInfo", UserController.addUser);
// mainRoute.get("/userInfo", UserController.getUserList);

mainRoute.get("/userReg", UserRegController.getUserReg);

mainRoute.post("/login", LoginController.addLoginLog);
mainRoute.get("/login", LoginController.getLoginLog);

export default mainRoute;