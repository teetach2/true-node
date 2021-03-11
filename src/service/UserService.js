import { userList } from '../dao/UserInfoList';
import * as UserRegService from './UserRegService';

export const addUser = (user) => {
    const idx = userList.length;
    const userData = {
        id: idx,
        ...user
    }
    UserRegService.addUserReg(idx);
    return userList.push(userData);
}

export const getAllUser = () => {
    return userList;
}