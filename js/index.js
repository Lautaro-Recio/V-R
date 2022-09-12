



const carousel = [
    {name:"Proyecto y conducción tecnica",img:["./assets/imgs/casa1/g-m1.jpg","./assets/imgs/casa1/g-m2.jpg","./assets/imgs/casa1/g-m3.jpg","./assets/imgs/casa1/g-m4.jpg","./assets/imgs/casa1/g-m5.jpg"]},

    {name:"Llave en mano",img:["./assets/imgs/casa2/m-p1.jpg","./assets/imgs/casa2/m-p2.jpg","./assets/imgs/casa2/m-p4.jpg","./assets/imgs/casa2/m-p5.jpg","./assets/imgs/casa2/m-p5.jpg"]},

    {name:"Local comercial",img:["./assets/imgs/local1/local.jpg","./assets/imgs/local1/local1.jpg","./assets/imgs/local1/local2.jpg","./assets/imgs/local1/local3.jpg","./assets/imgs/local1/local4.jpg"],},

    {name:"Proyecto y conducción tecnica",img:["./assets/imgs/casa3/casa1.jpg","./assets/imgs/casa3/casa2.jpg","./assets/imgs/casa3/casa3.jpg","./assets/imgs/casa3/casa4.jpg","./assets/imgs/casa3/casa5.jpg"]},

   

]

const proyectos = document.getElementById("proyectos")

const carouselContainer = ()=>{

    
    for (let i = 0; i < 4; i++)
    {   
        let div = document.createElement("div");
        div.setAttribute("class", "carousel carouselCasas slide");
        div.setAttribute("id", `carouselExampleIndicators${i+1}`);
        div.setAttribute("data-bs-ride", "true");

        div.innerHTML = `
            <h5>${carousel[i].name}</h5>
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner" id="carousel${i+1}">

            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${i+1}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${i+1}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
                `;
            proyectos.appendChild(div)

    }
}
carouselContainer()

let i = 1

function carrousel(array){
   
    
    for (const img of carousel)
    {    
        let X = 1

        let carouselByID = document.getElementById(`carousel${i}`)
        
        for (const imgDir of img.img){
            let div = document.createElement("div");
            if(X===1){
                div.setAttribute("class", "carousel-item active");
                X++
            }else{
                div.setAttribute("class", "carousel-item ");

            }
            div.innerHTML = `
               <img src="${imgDir}" class="d-block w-100" alt="...">
            `;
            carouselByID.appendChild(div)
        }
        i++
    }
}

carrousel()



/* Servicios */

const services = [
    {name:"Llave en Mano",img:"./assets/imgs/llaveEnMano.png",parraf:"Nos diferenciamos de las grandes constructoras haciendo personalizado cada proyecto, acompañamos al cliente en la elección de todos los detalles estéticos. Este sistema es ideal para aquellos clientes que solo piensan en el día de la mudanza y disfrutar del nuevo hogar."},
    {name:"Proyectos",img:"./assets/imgs/conduccion.png",parraf:"Diseñamos cada espacio según necesidades, gustos y forma de habitar de cada cliente en particular, adecuado a su economía y condicionados por el terreno, su forma,  su ubicación y orientaciones."},
    {name:"Conducción tecnica",img:"./assets/imgs/conduccionTecnica.png",parraf:"Acompañamos la ejecución de la obra controlando la fiel interpretación de los planos, para lograr el proyecto diseñado."},
    {name:"Arquitectura Comercial",img:"./assets/imgs/comercial.png",parraf:"Diseñamos fachadas e interiores comerciales haciendo un análisis complejo sobre el rubro de cada actividad, logrando una imagen que aumente las ventas y aportando diseño al área comercial de cada ciudad. "},
    {name:"Relevamientos",img:"./assets/imgs/documentos.png",parraf:"Medimos y realizamos la documentación de construcciones que no tuviesen planos aprobados y sean requeridos para presentar ante el municipio requerido para regularizar dicha situación."},
    {name:"Diseño de interiores",img:"./assets/imgs/diseñoInterior.png",parraf:"Diseñamos cada interior de la casa según gustos y formas de habitar de cada cliente, sabemos que la casa es el lugar donde más tiempo pasamos y no hay nada mejor que habitarla y estar cómodo y a gusto en ella."},

]

const serviceContainer = document.getElementById("slides")

function servicios(){ 
    for (const serv of services)
    {    
        let div = document.createElement("div");
        div.setAttribute("class", "swiper-slide");
        div.innerHTML = 
                `
                <div class="servicesCards">
                    <h5>${serv.name}</h5>
                    <img loading="lazy" src="${serv.img}" alt="${serv.name}">
                    <p>${serv.parraf}</p>
                </div>
                `;
        serviceContainer.appendChild(div)
    }
}
servicios()


/* Contacto */

const Contact = [
    {name:"Valeria Venturini",num: 3525643165,mail:"valeriaventuriniarq@gmail.com"},
    {name:"Luciana Roggio",num:3525413084,mail: "lucianaroggioarq@gmail.com "},

]
const ContactContainer = document.getElementById("contact")

function contactFunction(){ 
    for (const num of Contact)
    {    
        let div = document.createElement("div");
        div.setAttribute("class", "contactCards");
        div.innerHTML = 
                `   
                <h5>${num.name}</h5>
                <div>
                    <img loading="lazy" src="./assets/imgs/celular.png" alt="tell">
                    <p>${num.num}</p>
                </div>
                <div>

                    <img loading="lazy" src="./assets/imgs/mail.png" alt="mail">
                    <p>${num.mail}</p>
                </div>
                <hr>
                `;
                ContactContainer.appendChild(div)
    }
}
contactFunction()


/* Swipper */

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 40
        },

        800: {
            slidesPerView: 3,
            spaceBetween: 40
        },

        960: {
            slidesPerView: 3,
            spaceBetween: 80
        },

        1120: {
            slidesPerView: 3,
            spaceBetween: 120
        },

        1440: {
            spaceBetween: 170,
            slidesPerView: 3,
        }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });