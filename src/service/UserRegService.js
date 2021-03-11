import { userRegDateList } from '../dao/UserRegDate'; 
import { userList } from '../dao/UserInfoList'; 

export const addUserReg = (id) => {
    const userRegData = {
        id: id,
        regDateTime: new Date(Date.now()).toISOString()
    }
    userRegDateList.push(userRegData);
}

export const getUserReg = () => {
    const list = [];
    for (const userRegDate of userRegDateList) {
        const userInfo = userList.find(user => {
            return user.id === userRegDate.id
        });
        const userRegData = {
            id: userRegDate.id,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            age: userInfo.age,
            sex: userInfo.sex,
            regDateTime: userRegDate.regDateTime
        }
        list.push(userRegData);
    }
    return list;
}