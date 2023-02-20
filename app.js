const http = require("http");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.set("view engine","ejs");
app.use(express.static(__dirname+'/public'))
app.use(bodyparser.urlencoded({extended:true}));

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

app.get('/',(req,res)=>{
   // res.send("<h1>Iniciamos con express</h1>")
   res.render('index', {titulo:"Listado de alumnos", listado:datos})
});

app.get('/tablas',(req,res)=>{
   const valores = {
      tabla: req.query.tabla
   }
   res.render('tablas', valores)
})

app.post('/tablas',(req,res)=>{
   const valores = {
      tabla: req.body.tabla
   }
   res.render('tablas', valores)
})

app.get('/cotizacion',(req,res)=>{
   const valores ={
      valor: req.query.valor,
      pInicial: req.query.pInicial,
      plazos: req.query.plazos
   }
   res.render('cotizacion', valores)
})

app.post('/cotizacion',(req,res)=>{
   const valores ={
      valor: req.body.valor,
      pInicial: req.body.pInicial,
      plazos: req.body.plazos
   }
   res.render('cotizacion', valores)
})

app.use((req,res,next)=>{res.status(404).sendFile(__dirname+'/public/error.html')})

// Escuchar al servidor por el puerto 3000
const puerto = 3000;
app.listen(puerto,()=>{console.log("Iniciando puerto 3000")});