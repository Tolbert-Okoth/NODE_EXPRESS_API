import { v4 as uuidv4 } from 'uuid';

let users = [];

const getUsers = (req, res) => {
  res.send(users);
};


const createUser = (req, res) => {


  const user = req.body;

  // simple validation
  if (!user.firstName || !user.lastName) {
    return res.status(400).send("Missing required fields: firstName or lastName");
  }

  const userWithId = { ...user, id: uuidv4() };
  users.push(userWithId);

  res.send(`User with the name ${userWithId.firstName} added to the database!`);
};

const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.send(user);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  Object.assign(user, req.body);
  res.send(`User with ID ${id} updated successfully`);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex(u => u.id === id);
  if (userIndex === -1) {
    return res.status(404).send("User not found");
  }
  users.splice(userIndex, 1);
  res.send(`User with ID ${id} deleted successfully`);
};

export { getUsers, createUser, getUserById, updateUser, deleteUser };