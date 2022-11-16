const express =require ("express");
const bodyparser = require ('body-parser');
const route =require ('./route/route.js');
const {default: mongoose } = require('mongoose');
const app = express();


//app.use(bodyParser.json());
//app.use(bodyParse.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://project:project123@project1.xoxxjbs.mongodb.net/test",{
useNewUrlParser : true
})

.then(() => console.log("Mongodb is connected"))
.catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function (){
     console.log('Express app running on port'+ (process.env.PORT || 3000))
});