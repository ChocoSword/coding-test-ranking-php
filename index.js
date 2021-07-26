window.onload = function () {
    cargaAnuncios();
};


/**
 * Envia peticion ajax para crear anuncios de manera dinamica con los datos recibidos.
 */
function cargaAnuncios() {
    var data = {
        accion: "cargaAnuncios"
    };    
    var request = $.ajax({
        url: "./api/cargaAnuncios.php",
        method: "POST",
        dataType: 'json',
        data: data
    });

    request.done(function (respuesta) {
        crearEstructuraAnuncios(respuesta);
    });

    request.fail(function (jqXHR, textStatus, errorThrown) {
        console.error(errorThrown);
        console.error(textStatus);
        console.error(jqXHR.responseText);
    });
}

/**
 * Crea de forma dinamica los anuncios
 * @param {Object} JSON_Array          Contiene todos los datos recibidos de la consulta de BDD. 
 */
function crearEstructuraAnuncios(result) {
    var anuncios = result.anuncio;
    var fotos = result.fotos;

    for (x = 0; x < anuncios.length; x++) {

        // PRIMERA SECCION: FOTO ANUNCIO
        var contenedorDatos = document.getElementById("contenidoDinamico");
        var rowAnuncio = document.createElement("div");
        rowAnuncio.classList.add("row");
        rowAnuncio.classList.add("rowAnuncio");
        var colImagen = document.createElement("div");
        colImagen.classList.add("col-3");
        colImagen.classList.add("colImagen");

        rowAnuncio.append(colImagen);

        // CONFIGURACION carousel
        var carousel = document.createElement("div");
        carousel.id = "carousel_" + x;
        carousel.classList.add("carousel");
        carousel.classList.add("slide");
        carousel.setAttribute("data-ride", "carousel");
        var carouselInner = document.createElement("div");
        carouselInner.classList.add("carousel-inner");

        colImagen.append(carousel);

        // CONFIGURACION imagenes
        var primeraFoto = true;
        var numFotos = 0;
        for (y = 0; y < fotos.length; y++) {
            // si los id's coniciden
            if (anuncios[x].idAnuncio == fotos[y].idAnuncio) {
                numFotos++;
                var carouselItem = document.createElement("div");
                carouselItem.classList.add("carousel-item");

                // solo queremos proporcionar la clase 'active' al primero de los elementos
                if (primeraFoto == true) {
                    carouselItem.classList.add("active");
                    primeraFoto = false;
                }

                var imagen = document.createElement("img");
                imagen.classList.add("colImagen");
                imagen.setAttribute("src", "./recursos/imagenes/" + fotos[y].foto);

                carouselItem.append(imagen);
                carouselInner.append(carouselItem);
                carousel.append(carouselInner);
            }
        }

        // solo queremos flechas del carousel en los anuncios con mas de 1 foto
        if (numFotos > 1) {
            
            //flecha izquierda carousel
            var carouselLeftArrow = document.createElement("a")
            carouselLeftArrow.classList.add("carousel-control-prev");
            carouselLeftArrow.setAttribute("href", "#carousel_" + x);
            carouselLeftArrow.setAttribute("role", "button");
            carouselLeftArrow.setAttribute("data-slide", "prev");
            var spanCntrolIcon = document.createElement("span");
            spanCntrolIcon.classList.add("carousel-control-prev-icon");
            spanCntrolIcon.setAttribute("aria-hidden", "true");
            var spanPrev = document.createElement("span");
            spanPrev.classList.add("sr-only");
            spanPrev.innerHTML = "Previous";

            spanCntrolIcon.append(spanPrev);
            carouselLeftArrow.append(spanCntrolIcon);
            carousel.append(carouselLeftArrow);

            //flecha derecha carousel
            var carouselRightArrow = document.createElement("a")
            carouselRightArrow.classList.add("carousel-control-next");
            carouselRightArrow.setAttribute("href", "#carousel_" + x);
            carouselRightArrow.setAttribute("role", "button");
            carouselRightArrow.setAttribute("data-slide", "next");
            var spanCntrolIcon = document.createElement("span");
            spanCntrolIcon.classList.add("carousel-control-next-icon");
            spanCntrolIcon.setAttribute("aria-hidden", "true");
            var spanNext = document.createElement("span");
            spanNext.classList.add("sr-only");
            spanNext.innerHTML = "Next";


            spanCntrolIcon.append(spanNext);
            carouselRightArrow.append(spanCntrolIcon);
            carousel.append(carouselRightArrow);
        }

        // SEGUNDA SECCION: titulo, precio, descripcion corta, descripcion detallada, telefono, 
        var colTexto = document.createElement("div");
        colTexto.classList.add("col-9");
        colTexto.classList.add("colTexto");
        var row = document.createElement("div");
        row.classList.add("row");
        var colTitulo = document.createElement("div");
        colTitulo.classList.add("col-12");
        colTitulo.classList.add("colTitulo");
        colTitulo.innerHTML = '<h4><a href="http://www.google.com">' + anuncios[x].titulo + '</a></h4>';
        var colPrecio = document.createElement("div");
        colPrecio.classList.add("col-12");
        colPrecio.classList.add("colPrecio");
        colPrecio.innerHTML = '<h4><label>' + anuncios[x].precio + '</label></h4>';
        var colInfoCorto = document.createElement("div");
        colInfoCorto.classList.add("col-12");
        colInfoCorto.classList.add("colInfoCorto");
        colInfoCorto.innerHTML = '<label>' + anuncios[x].infoCorta + '</label>';
        var colInfoDetalle = document.createElement("div");
        colInfoDetalle.classList.add("col-12");
        colInfoDetalle.classList.add("colInfoDetalle");
        colInfoDetalle.innerHTML = '<label>' + anuncios[x].infoDetalle + '</label>';
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
    }
}