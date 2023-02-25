const express = require("express");
const router = express.Router();
const bodyParse = require("body-parser");

let datos = [{
    matricula:"2020030999",
    nombre:"ACOSTA ORTEGA JESUS ROBERTO",
    sexo:"M",
    materias:["ingles", "Tecnologías 1", "Base de datos"]
 },
 {
    matricula:"2020030990",
    nombre:"ACOSTA VARELA IRVING GUADALUPE",
    sexo:"M",
    materias:["ingles", "Tecnologías 1", "Base de datos"]
 },
 {
    matricula:"2020030899",
    nombre:"ALMOGAR VAZQUEZ YARLEN DE JESUS",
    sexo:"F",
    materias:["ingles", "Tecnologías 1", "Base de datos"]
 },
 {
    matricula:"2020030200",
    nombre:"GONZALEZ PAEZ MARCOS ABRAHAM",
    sexo:"M",
    materias:["ingles", "Tecnologías 1", "Base de datos"]
 },
 {
    matricula:"2020030300",
    nombre:"CHAVEZ ORTIZ LUIS GUILLERMO",
    sexo:"M",
    materias:["ingles", "Tecnologías 1", "Base de datos"]
 },
 {
    matricula:"2020030400",
    nombre:"LOPEZ SANCHEZ ANA PAULINA",
    sexo:"F",
    materias:["ingles", "Tecnologías 1", "Base de datos"]
 }
 ];
 
 router.get('/',(req,res)=>{
    // res.send("<h1>Iniciamos con express</h1>")
    res.render('index.html', {titulo:"Listado de alumnos", listado:datos})
 });

 router.get('/tablas',(req,res)=>{
    const valores = {
       tabla: req.query.tabla
    }
    res.render('tablas.html', valores)
 })
 
 router.post('/tablas',(req,res)=>{
    const valores = {
       tabla: req.body.tabla
    }
    res.render('tablas.html', valores)
 })

 router.get('/cotizacion',(req,res)=>{
    const valores ={
       valor: req.query.valor,
       pInicial: req.query.pInicial,
       plazos: req.query.plazos
    }
    res.render('cotizacion.html', valores)
 })
 
 router.post('/cotizacion',(req,res)=>{
    const valores ={
       valor: req.body.valor,
       pInicial: req.body.pInicial,
       plazos: req.body.plazos
    }
    res.render('cotizacion.html', valores)
 })

module.exports=router;
