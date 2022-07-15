import express from 'express';
const app = express();
const port = 8000;

app.get('/',(req,res)=> {
    res.send('hello world');
})

const server = app.listen(port,()=> {
    console.log('hello server');
})