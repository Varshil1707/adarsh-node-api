const express = require('express');

const app = express();


app.use(express.json())
const adminRoutes = require('./routes/admin');


app.use('/admin', adminRoutes);


app.listen(3001,()=>{
    console.log("server start")
});
