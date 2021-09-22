const mongoose = require('mongoose')


//mongoose.Promise = global.Promise;
URI =('mongodb://localhost/ensayo')


mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
   
})
.then(db=>console.log('base de datos conectada'))
.catch(error=>console.log(error))
module.exports=mongoose