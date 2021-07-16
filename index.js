
// PRIMERA SECCION: FOTO ANUNCIO
var contenedorDatos = document.getElementById("contenidoDinamico");
var rowAnuncio = document.createElement("div");
rowAnuncio.classList.add("row");
rowAnuncio.classList.add("rowAnuncio");
var colImagen = document.createElement("div");
colImagen.classList.add("col-4");
colImagen.classList.add("colImagen");
var imagen = document.createElement("img");
imagen.classList.add("imagenAnuncio");
imagen.setAttribute("src", "./recursos/imagenes/fotoNoDisponible.jpg");

colImagen.append(imagen);
rowAnuncio.append(colImagen);


// SEGUNDA SECCION: titulo, precio, descripcion corta, descripcion detallada, telefono, 
var colTexto = document.createElement("div");
colTexto.classList.add("col-8");
colTexto.classList.add("colTexto");
var row = document.createElement("div");
row.classList.add("row");
var colTitulo = document.createElement("div");
colTitulo.classList.add("col-12");
colTitulo.classList.add("colTitulo");
colTitulo.innerHTML = '<h4><a href="http://www.google.com">Casa a 200 metros de la costa</a></h4>';
var colPrecio = document.createElement("div");
colPrecio.classList.add("col-12");
colPrecio.classList.add("colPrecio");
colPrecio.innerHTML = '<h4><label>600 €/mes</label></h4>';
var colInfoCorto = document.createElement("div");
colInfoCorto.classList.add("col-12");
colInfoCorto.classList.add("colInfoCorto");
colInfoCorto.innerHTML = '<label>72 m² 2 hab. Planta 1ª interior con ascensor</label>';
var colInfoDetalle = document.createElement("div");
colInfoDetalle.classList.add("col-12");
colInfoDetalle.classList.add("colInfoDetalle");
colInfoDetalle.innerHTML = '<label>No tiene muebles, tampoco suelo en una habitacion, no es que falte un cachito, no referimos a que invitamos al vecino a comer por una escalera que tenemos puesta </label>';
var colFooterTlf = document.createElement("div");
colFooterTlf.classList.add("col-3");
colFooterTlf.classList.add("colFooter");
colFooterTlf.innerHTML = '<label><img class="footerImages" src="./recursos/imagenes/phone.png"> 555-9242</label>';
var colFooterChat = document.createElement("div");
colFooterChat.classList.add("col-3");
colFooterChat.classList.add("colFooter");
colFooterChat.innerHTML = '<label><img class="footerImages" src="./recursos/imagenes/chat.png"> contactar</label>';
var colFooterDescartar = document.createElement("div");
colFooterDescartar.classList.add("col-3");
colFooterDescartar.classList.add("colFooter");
colFooterDescartar.innerHTML = '<button id="button"><img class="footerImages" src="./recursos/imagenes/bin.png"></button>';
var colFooterGuardar = document.createElement("div");
colFooterGuardar.classList.add("col-3");
colFooterGuardar.classList.add("colFooter");
colFooterGuardar.innerHTML = '<label><img class="footerImages" src="./recursos/imagenes/heart.png"> Guardar</label>';

row.append(colTitulo);
row.append(colPrecio);
row.append(colInfoCorto);
row.append(colInfoDetalle);
row.append(colFooterTlf);
row.append(colFooterChat);
row.append(colFooterDescartar);
row.append(colFooterGuardar);
colTexto.append(row);
rowAnuncio.append(colTexto);

contenedorDatos.append(rowAnuncio);


