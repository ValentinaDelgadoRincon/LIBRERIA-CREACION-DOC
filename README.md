# 🧾 Generador de Documentos PDF con Node.js

## 📜 Descripción del Proyecto

Este proyecto es una **aplicación de consola sencilla** desarrollada en **Node.js**, que permite generar facturas, reportes o documentos PDF personalizados. El objetivo de esta aplicación es demostrar el uso de la librería [**PDFKit**](https://www.npmjs.com/package/pdfkit) para la creación de archivos PDF de manera dinámica a partir de datos proporcionados por el usuario.

### ❓ ¿Por qué se creó esta aplicación?
La necesidad que resuelve esta aplicación es la de generar facturas o documentos PDF de manera rápida y eficiente desde la línea de comandos. Muchos negocios pequeños o freelancers necesitan generar facturas de forma automatizada sin necesidad de utilizar software de facturación complejos. Esta aplicación ofrece una solución sencilla, rápida y accesible.

## 🛠️ Librería Utilizada

**[PDFKit](https://www.npmjs.com/package/pdfkit)** es una librería de Node.js para crear documentos PDF. Con ella, es posible generar PDFs dinámicamente mediante código, agregar texto, imágenes, tablas, gráficos y más. Es ideal para generar reportes, facturas o cualquier otro documento que requiera un formato PDF.

## 🧑‍💻 Funcionamiento de la Aplicación

La aplicación presenta un menú interactivo con cuatro opciones principales:

1. **Generar Factura PDF** 🧾: Permite ingresar detalles de una factura (nombre del cliente, productos, precios, etc.) y generar un archivo PDF.
2. **Crear Reporte PDF** 📊: Permite crear un reporte con una estructura predefinida.
3. **Generar Nota** 📑: Permite generar una nota con detalles .
4. **Salir** ❌: Termina la ejecución del programa.

Cada opción utiliza la librería **PDFKit** para generar el documento PDF con los datos proporcionados y guarda el archivo generado en el sistema de archivos local.

## 🚀 Instalación

Sigue estos pasos para ejecutar la aplicación en tu máquina local:

1. **Clona el repositorio** en tu máquina:

    ```bash
    git clone https://github.com/tu-usuario/nombre-del-repo.git
    cd nombre-del-repo
    ```

2. **Instala las dependencias** utilizando npm:

    ```bash
    npm install
    ```

3. **Ejecuta la aplicación**:

    ```bash
    node app.js
    ```

   Esto iniciará la aplicación en la consola y te presentará el menú interactivo.

## ⚙️ Uso

Una vez que la aplicación esté corriendo, podrás interactuar con el menú para seleccionar las diferentes opciones disponibles. Dependiendo de la opción seleccionada, la aplicación te pedirá que ingreses algunos datos, como el nombre del cliente o los productos que deseas incluir en la factura. Tras ingresar los datos, el sistema generará un archivo PDF con la información proporcionada.

### 📝 Ejemplo:

1. Selecciona "Generar Factura PDF"
2. Ingresa el nombre del cliente: **Juan Pérez**
3. Ingresa los detalles de los productos:

   - Producto 1: **Camiseta** - $20
   - Producto 2: **Zapatos** - $50

4. La aplicación generará un archivo PDF con el formato de factura que podrás encontrar en la carpeta `generador_pdf/`.

## 📑 Ejemplo de Documento Generado

El archivo PDF generado contiene:

- Título con el nombre de la factura 🧾.
- Datos del cliente 🧑‍💼.
- Detalles de los productos adquiridos 🛍️.
- El total de la factura 💸.
- Fecha de emisión 📅.

## 🏆 Justificación de la Librería Utilizada

Elegímos **PDFKit** debido a su capacidad para crear documentos PDF de manera flexible y sencilla. No solo es fácil de integrar en aplicaciones de Node.js, sino que también ofrece una gran variedad de opciones de personalización (fuentes, estilos, imágenes, etc.), lo que la hace ideal para generar facturas, reportes y otros documentos comerciales.

## 🎥 Video de Presentación

Puedes ver el video de presentación de la aplicación [aquí](https://enlace-al-video).


---

## 😊 Autores

Proyecto realizado por Valentina Delgado y Camila Florez.

---

## 📩 Contacto GitHub
- https://github.com/ValentinaDelgadoRincon
- https://github.com/CamilaFlorez12