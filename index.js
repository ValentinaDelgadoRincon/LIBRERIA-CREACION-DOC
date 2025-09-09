const inquirer = require('inquirer');
const PDFDocument = require('pdfkit');
const fs = require('fs');

function menu(){
    inquirer.prompt([{
        type:'list',
        name:'opcion',
        message:"Bienvendio a tu creador de archivos, selecciona la opción que deseas hacer:",
        choices:[
            {name:"1. Generar factura PDF", value:"1"},
            {name: "2. Crear reporte PDF",value:"2"},
            {name: "3. Generar nota PDF",value:"3"},
            {name: "4. Salir",value:"4"}   
        ]
    }])
    .then((respuesta)=>{
        switch(respuesta.opcion){
            case "1":
                generarFactura();
                break;
            case "2":
                generarReporte();
                break;
            case "3":
                generarpdf();
                break;
            case "4":
                console.log("Chaitooooo");
                process.exit();
            
        }
    });

}

function generarFactura(){
    inquirer.prompt([{
        type:"input",
        name:"cliente",
        message:"Nombre Cliente:"
    },
    {
        type:"input",
        name:"producto",
        message:"Nombre producto"
    },
    {
        type:"input",
        name:"precio",
        message:"Precio",
        validate:(value)=>(!isNaN(value)?true:"Debes ingresar un número")
    },
    {
        type:"input",
        name:"fecha",
        message:"Fecha"
    }
])
.then((respuestas)=>{
    const documento=new PDFDocument();
    const fileName=`factura_${respuestas.cliente.replace(/\s+/g, '_')}.pdf`;
    documento.pipe(fs.createWriteStream(fileName));

    const fecha= respuestas.fecha || new Date().toLocaleDateString();

    documento.text(`cliente:${respuestas.cliente}`);
    documento.text(`producto:${respuestas.producto}`);
    documento.text(`precio:${respuestas.precio}`);
    documento.text(`fecha:${fecha}`);
    documento.end();
    console.log(`Factura generada exitosamente:${fileName}`);
    menu();
});
}

function generarReporte(){
    const doc=new PDFDocument();
    const fileName='reporte.pdf';
    doc.pipe(fs.createWriteStream(fileName));

    doc.text("Productos más vendidos:");
    doc.list(['laptop','mouse','teclado']);
    doc.end();
    console.log(`Reporte generado exitosamente:${fileName}`);
    menu();
}

function generarpdf(){
    inquirer.prompt([{
        type:"input",
        name:"mensaje",
        message:"Escribe tu nota"
    },
    {
        type:"input",
        name:"titulo",
        message:"Titulo del documento",
        default:"Nota/recordatorio"
    }
])
.then((respuestas)=>{
    const doc =new PDFDocument();
    const fileName=`nota.pdf`;
    doc.pipe(fs.createWriteStream(fileName));
    doc.end();
    console.log(`Nota generada exitosamente${fileName}`);
    menu();
});
}
menu();