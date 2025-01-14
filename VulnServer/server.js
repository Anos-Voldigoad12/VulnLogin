const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Hardcoded credentials for demonstration
const validUsername = 'test';
const validPassword = 'espionage';

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname),'index.html');
});

app.post('/login', async (req,res) => {
	const { username, password } = req.body;
	try{
		if (username === validUsername && password === validPassword) {
			res.status(200).send('<h1>Login Successful</h1>');
		} else {
			res.status(401).send('<h1>Invalid Credentials</h1>');
		}	
	} catch (error) {
		console.error("Error during login: ",error);
		res.status(500).send('Internal Server Error');
	}  		
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
