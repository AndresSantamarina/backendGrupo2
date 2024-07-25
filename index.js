import express, { urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'
import admnistradorRoutes from './src/routes/administrador.routes.js'
import profesorRoutes from './src/routes/profesor.routes.js'
import './src/database/database.js';

const app = express();

app.set('port', process.env.PORT || 4001);
app.listen(app.get('port'), () => {
    console.info('Servidor funcionando en el puerto ' +app.get('port'));
});

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false }))
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '/public')));

app.use('/api', admnistradorRoutes);
app.use('/api', profesorRoutes);