import express from 'express';
import { PrismaClient } from '../generated/prisma';

const app = express();
const prisma = new PrismaClient();

app.get('/', async (req, res) => {
    const usersDb = await prisma.user.findMany();
    res.json(usersDb);
});

app.post('/createUser', async (req, res) => {
    const userBody = {
        nom: "Benjamin",
        prenom: "Cornet",
        email: "cornetbenjamintest@gmail.com"
    }


})

app.listen(3001, () => {
    console.log('Serveur lancé sur http://localhost:3001');
});