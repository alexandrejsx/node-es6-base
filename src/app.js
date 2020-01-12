import express from "express";

const app = express();

app.get('/', (req, res) => {
    const msg = "Hello World"
    return res.json({ msg })
})

app.listen(3000);
