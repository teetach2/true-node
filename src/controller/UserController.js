import * as UserService from '../service/UserService';

export const addUser = (req, res) => {
  const user = UserService.addUser(req.body);
  res.status(201).json();
};

export const getUserList = (req, res) => {
  res.send(UserService.getAllUser());
};
