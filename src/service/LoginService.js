import { loginLogList } from '../dao/LoginLog';
import { userList } from '../dao/UserInfoList'; 

export const addLoginLog = (loginLog) => {
    const loginData = {
        id: loginLog.id,
        device: loginLog.device,
        dateTime: new Date(Date.now()).toISOString()
    }
    loginLogList.push(loginData);
}

export const getLoginLog = () => {
    const list = [];
    for (const loginLog of loginLogList) {
        const userInfo = userList.find(user => {
            return user.id === loginLog.id
        });
        const loginLogData = {
            id: loginLog.id,
            device: loginLog.device,
            dateTime: loginLog.dateTime,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            age: userInfo.age,
            sex: userInfo.sex,
        }
        list.push(loginLogData);
    }
    return list;
}