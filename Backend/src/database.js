const mongoose = require('mongoose')


mongoose.Promise = global.Promise;
URI =('mongodb://localhost:27017/ensayo')


mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
   
})
.then(()=>console.log('base de datos conectada'))
.catch(error=>console.log(error))
module.exports=mongoose