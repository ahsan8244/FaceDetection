const Express = require('express');
const BodyParser = require('body-parser');

const app = new Express();

const db = {
	users: [
		{
			id: '1',
			name: 'bill',
			password: 'bill',
			email: 'bill@gmail.com',
			entries: 0,
			joined: new Date()
		}
	]
}

app.use(BodyParser.json());

app.get('/', (req, res) => {
	res.send(db.users);
});

app.post('/signin', (req, res) => {
	if(req.body.email === db.users[0].email &&
		req.body.password === db.users[0].password){
		res.json('success');
	}else{
		res.status(400).json('error logging in');
	}
});

app.post('/signup', (req, res) => {
	const { name, email, password } = req.body;
	db.users.push(
		{
			id: 2,
			name: name,
			password: password,
			email: email,
			entries: 0,
			joined: new Date()
		}
	);
	res.json(db.users[db.users.length - 1]);
});

app.get('/profile/:id', (req, res) => {
	const { id } = req.params;
	let isFound = false;
	db.users.forEach(user => {
		if (user.id === id){
			isFound = true;
			res.json(user);
		}
	});
	if(!isFound){
		res.status(404).json('user not found');
	}
});

app.put('/image', (req, res) => {
	const { id } = req.body;
	let isFound = false;
	db.users.forEach(user => {
		if (user.id === id){
			isFound = true;
			user.entries++;
			res.json(user.entries);
		}
	});
	if(!isFound){
		res.status(404).json('user not found');
	}
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});