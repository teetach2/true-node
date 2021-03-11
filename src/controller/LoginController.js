import * as LoginService from '../service/LoginService';

export const addLoginLog = (req, res) => {
    LoginService.addLoginLog(req.body)
    res.status(201).json(); 
}

export const getLoginLog = (req, res) => {
    res.send(LoginService.getLoginLog()); 
}