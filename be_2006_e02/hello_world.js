import express from 'express';

const app = express();

const port = 3000;

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('hello-world', {
        title: "This is my first Express application",
        subtitle: 'It\'s name is Hello World!'
    })
});

app.listen(port, () => console.log(`Hello world app is +  listening to port ${port}.`));
