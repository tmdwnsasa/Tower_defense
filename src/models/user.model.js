const users = [];

export const addUser = (user) => {
  users.push(user);
  console.log("addUser: Current users: ", users);
};

export const removeUser = (socketId) => {
  const index = users.findIndex((user) => user.socketId === socketId);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

export const getUser = () => {
  return users;
};
