
const staff = [
    {name:"Valeria Venturini",img:"./assets/imgs/perfil.jpg",parraf:"Arquitecta recibida en el año 2009, en la universidad nacional de Cordoba", puesto:"<b>Socia fundadora</b>, encargada del área proyectos, administración y obras"},
    {name:"Luciana Roggio",img:"./assets/imgs/perfil.jpg",parraf:"Arquitecta recibida en el año 2009, en la universidad nacional de Cordoba", puesto:"<b>Socia fundadora</b>, encargada del área proyectos y obras"},
    {name:"Guadalupe Guyon",img:"./assets/imgs/perfil.jpg",parraf:"Estudiante de arquitectura en la Universidad Nacional de Córdoba", puesto:"Colaboradora en armado de piezas gráficas y legajos"},

]
const staff2 = [
    {name:"Guillermo Sangoy",img:"./assets/imgs/perfil.jpg",parraf:"Ingeniero Civil recibido en el año 2013, en la Universidad Tecnológica Nacional - Facultad Regional Córdoba",puesto:"<b>Socio</b>, Encargado del área técnica y obras"},
    {name:"Milagros del Zopo",img:"./assets/imgs/perfil.jpg",parraf:"Arquitecta recibida en el año 2020 en la Universidad Nacional de Córdoba",puesto:"Encargada del área comercial e interiorismo"},
]
function graficar(array,box){

    for (const perfil of array){
        let div = document.createElement("div");
        div.setAttribute("class", "col-md-12 col-xs-5 box");
    div.setAttribute("id", "cajas");
    div.innerHTML = `
            <div>
                <h5>${perfil.name}</h5>
                <p>${perfil.parraf}</p>
                <p>${perfil.puesto}</p>

            </div>
                <img  src="${perfil.img}" alt="${perfil.name}" class="prods">
                `;
                box.appendChild(div);
            }
}

const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")

graficar(staff,box1)
graficar(staff2,box2)




const carousel = [
    {name:"Diego Suarez",img:["./assets/imgs/ProyectosR+v.png","./assets/imgs/perfil.jpg","./assets/imgs/ProyectosR+v.png"]},
    {name:"Pepa Perez",img:["./assets/imgs/perfil.jpg","./assets/imgs/ProyectosR+v.png",]},
    {name:"Juan valdez",img:["./assets/imgs/ProyectosR+v.png","./assets/imgs/perfil.jpg"],},
    {name:"Marcela Garcia",img:["./assets/imgs/ProyectosR+v.png","./assets/imgs/perfil.jpg"],},
    {name:"Pepe Suarez",img:["./assets/imgs/ProyectosR+v.png","./assets/imgs/perfil.jpg"],},
    {name:"Pedro garcia",img:["./assets/imgs/ProyectosR+v.png","./assets/imgs/perfil.jpg"],},

]

const proyectos = document.getElementById("proyectos")

const carouselContainer = ()=>{

    
    for (let i = 0; i < 6; i++)
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
    {name:"Llave en Mano",img:"./assets/imgs/llaveEnMano.png",parraf:"Nos encargamos de todo, entregamos la obra lista para habitar. Nos diferenciamos de las grandes constructoras haciendo personalizado cada proyecto, acompañamos al cliente en la elección de todos los detalles estéticos. Este sistema es ideal para aquellos clientes que no tienen tiempo de encargarse de lo que implica una obra o simplemente no quieren afrontar el trabajo que eso implica, nada mejor que pensar solo en el día de la mudanza y disfrutar del nuevo hogar."},
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
                    <img src="${serv.img}" alt="${serv.name}">
                    <p>${serv.parraf}</p>
                    <button>Consultar</button>
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
                    <img src="./assets/imgs/celular.png" alt="tell">
                    <p>${num.num}</p>
                </div>
                <div>

                    <img src="./assets/imgs/mail.png" alt="mail">
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