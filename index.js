import express from 'express';
import userRoutes from './routes/users.js';
import bodyParser from 'body-parser';
const app = express();
const PORT = process.env.PORT || 2506;

app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('<h1>Home Page!</h1>'));

app.use('/users', userRoutes);

app.listen(PORT, () => console.log(`Server on http://127.0.0.1:${PORT}`));

app.use((req, res) => res.send('<h1>Oops! 404. Page not found!</h1>'));
