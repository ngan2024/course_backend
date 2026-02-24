import express from 'express';

const app = express();
const port=3000;

app.get('/report', (req, res, next) => {
/*     res.set({
        'Content-Type': 'text/html',
        'x-power-by': 'Unincorns and rainbows'
    }); */
   // res.status(200).set('Content-Type', 'text/html').send("<h1> Hello everyone! </h1>");
    //res.send("<h1> Hello everyone! </h1>")
    //res.sendStatus(500);
    //res.redirect('https://yle.fi/selkouutiset')
    //res.send("Hi guys!")
    //res.json({message: "Hi there!"})
    res.sendFile('/home/dell/1_backend/be_2026_e2_2/report.txt')
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})

