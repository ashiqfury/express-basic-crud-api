import { uuid } from 'uuidv4';

let users = [
	{
		name: 'your name',
		age: 'your age',
		status: 'your status',
		id: 'your uuid',
	},
];

const getUsers = (req, res) => {
	res.send(users);
};

const createUser = (req, res) => {
	users.push({ ...req.body, id: uuid() });
	res.send(users);
};

const getUser = (req, res) => {
	const user = users.find((user) => user.id === req.params.id);
	res.send(user);
};

const deleteUser = (req, res) => {
	users = users.filter((user) => user.id !== req.params.id);
	res.send('user deleted');
};

const updateUser = (req, res) => {
	const { name, age, status } = req.body;
	const user = users.find((user) => user.id === req.params.id);

	name && (user.name = name); // ES6
	age && (user.age = age);
	if (status) user.status = status; // ES5
	res.send('User updated');
};

export default {
	getUsers,
	createUser,
	getUser,
	deleteUser,
	updateUser,
};
