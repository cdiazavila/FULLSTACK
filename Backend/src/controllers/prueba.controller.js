const pruebaCtrl={}
pruebaCtrl.obtener=(req,res )=>{
    res.send('funcionando desde get')
}

pruebaCtrl.create= async (req,res )=>{
const {nombre,apellido,salario}=req.body
const nuevoRegistro= new Emplado({
    nombre,
    apellido,
    salario
})
await nuevoRegistro.save()

    res.json({mensaje:'Empleado Guardado'})
}

pruebaCtrl.actualizar=(req,res )=>{
    res.send('funcionando desde put')
}

pruebaCtrl.eliminar=(req,res )=>{
    res.send('funcionando desde Delite')
}
module.exports=pruebaCtrl