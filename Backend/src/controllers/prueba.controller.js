const pruebaCtrl={}
pruebaCtrl.obtener=(req,res )=>{
    res.send('funcionando desde get')
}

pruebaCtrl.create=(req,res )=>{
    res.send('funcionando desde post')
}

pruebaCtrl.actualizar=(req,res )=>{
    res.send('funcionando desde put')
}

pruebaCtrl.eliminar=(req,res )=>{
    res.send('funcionando desde Delite')
}
module.exports=pruebaCtrl