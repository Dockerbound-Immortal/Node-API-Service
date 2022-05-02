import express from 'express';

const PORT = process.env.PORT || 4000;
const PROJECT_NAME = process.env.PROJECT_NAME || 'project-api';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello API!');
});

app.listen(PORT, () =>{
    console.log(`${PROJECT_NAME} on port: ${PORT}`)
});