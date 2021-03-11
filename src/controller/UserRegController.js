import * as UserRegService from '../service/UserRegService';

export const getUserReg = (req, res) => {
    res.send(UserRegService.getUserReg()); 
}