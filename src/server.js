import express from "express";
import morgan from "morgan";
import path from "path";
import globalRouter from './routers/globalRouter.js';
import { fileURLToPath } from "url";


const app = express();
const PORT = 4000;
const __dirname = fileURLToPath(new URL(".", import.meta.url)); 

const logger = morgan('dev');

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');

app.use('/static', express.static(path.join(__dirname, 'public/static')));

app.use(logger);

app.use('/', globalRouter);

const startServer = () => console.log(`start server✅ http://localhost:${PORT}`);
app.listen(PORT, startServer);