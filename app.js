const express = require('express');
const morgan = require('morgan');
const app = new express();

app.use(morgan('dev'));
app.set('view engine','ejs');
app.set('views',__dirname+'/views')

require('dotenv').config()
const PORT = process.env.PORT

require('./db/connection');
const nav = [{link:"/employees",name:'Home'},
    {link:'/employees/employeeAdd',name:'Add Employee'}
]


const employeeRoutes = require('./routes/employeeRoutes')(nav);
app.use('/employees',employeeRoutes)



app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})



//enctype=      to add image
