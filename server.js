const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000 ;

app.get('/', (req, res) => {
    res.send('Hello, Raqeeb! Welcome to Express.js!');
});

app.get('/api/course',(req,res) => {
    res.send([1,2,3,4,5,6,7]);
})

app.get('/api/course/:id',(req , res)=> {
    res.send(req.params.id);
} )

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
