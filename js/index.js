
const staff = [
    {name:"Valeria Venturini",img:"../assets/imgs/perfil.jpg",parraf:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut, velit dicta! Officia labore commodi voluptates perferendis!Earum, dolorum labore iste harum odio placeat, ullam asperiores facilis animi consequuntur laborum laboriosam?"},
    {name:"Pedro Pepe",img:"../assets/imgs/perfil.jpg",parraf:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut, velit dicta! Officia labore commodi voluptates perferendis!Earum, dolorum labore iste harum odio placeat, ullam asperiores facilis animi consequuntur laborum laboriosam?"},
    
]
const staff2 = [
    {name:"Pepa Prez",img:"../assets/imgs/perfil.jpg",parraf:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut, velit dicta! Officia labore commodi voluptates perferendis!Earum, dolorum labore iste harum odio placeat, ullam asperiores facilis animi consequuntur laborum laboriosam?"},
    {name:"Juan garica",img:"../assets/imgs/perfil.jpg",parraf:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut, velit dicta! Officia labore commodi voluptates perferendis!Earum, dolorum labore iste harum odio placeat, ullam asperiores facilis animi consequuntur laborum laboriosam?"},
]
function graficar(array,box){

    for (const perfil of array){
        let div = document.createElement("div");
        div.setAttribute("class", "col-md-12 col-xs-5 box");
    div.setAttribute("id", "cajas");
    div.innerHTML = `
            <div>
                <h5>${perfil.name}</h5>
                <p>      
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut, velit dicta! Officia labore commodi voluptates perferendis!Earum, dolorum labore iste harum odio placeat, ullam asperiores facilis animi consequuntur laborum laboriosam?
                </p>
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
    {name:"Juan garica",img:["../assets/imgs/ProyectosR+v.png","../assets/imgs/perfil.jpg","../assets/imgs/ProyectosR+v.png"]},
    {name:"Pepa Prez",img:["../assets/imgs/perfil.jpg","../assets/imgs/ProyectosR+v.png",]},
    {name:"Juan ",img:["../assets/imgs/ProyectosR+v.png","../assets/imgs/perfil.jpg"],},
    {name:" garica",img:["../assets/imgs/ProyectosR+v.png","../assets/imgs/perfil.jpg"],},
    {name:"Pepe garica",img:["../assets/imgs/ProyectosR+v.png","../assets/imgs/perfil.jpg"],},
    {name:"milagors recio",img:["../assets/imgs/ProyectosR+v.png","../assets/imgs/perfil.jpg"],},

]

const proyectos = document.getElementById("proyectos")

const carouselContainer = ()=>{

    
    for (let i = 0; i < 6; i++)
    {   
        let div = document.createElement("div");
        div.setAttribute("class", "carousel slide");
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
    {name:"Llave en Mano",img:"../assets/imgs/llaveEnMano.png",parraf:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut, velit dicta! Officia labore commodi voluptates perferendis!Earum, dolorum labore iste harum odio placeat, ullam asperiores facilis animi consequuntur laborum laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut, velit dicta! Officia labore commodi voluptates perferendis!Earum, dolorum labore iste harum odio placeat, ullam asperiores facilis animi consequuntur laborum laboriosam?"},
    {name:"Proyectos y conduccion tecnica",img:"../assets/imgs/conduccion.png",parraf:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut, velit dicta! Officia labore commodi voluptates perferendis!Earum, dolorum labore iste harum odio placeat, ullam asperiores facilis animi consequuntur laborum laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut, velit dicta! Officia labore commodi voluptates perferendis!Earum, dolorum labore iste harum odio placeat, ullam asperiores facilis animi consequuntur laborum laboriosam?"},
    {name:"Diseño de interiores y locales comerciales",img:"../assets/imgs/diseñoInterior.png",parraf:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut, velit dicta! Officia labore commodi voluptates perferendis!Earum, dolorum labore iste harum odio placeat, ullam asperiores facilis animi consequuntur laborum laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut, velit dicta! Officia labore commodi voluptates perferendis!Earum, dolorum labore iste harum odio placeat, ullam asperiores facilis animi consequuntur laborum laboriosam?"},
]

const serviceContainer = document.getElementById("servicios")

function servicios(){ 
    for (const serv of services)
    {    
        let div = document.createElement("div");
        div.setAttribute("class", "servicesCards");
        div.innerHTML = 
                `
                    <h5>${serv.name}</h5>
                    <img src="${serv.img}" alt="${serv.name}">
                    <p>${serv.parraf}</p>
                    <button>Consultar</button>
                `;
        serviceContainer.appendChild(div)
    }
}
servicios()


/* Contacto */

const Contact = [
    {name:"Valeria Venturini",num:35133513551351,},
    {name:"Pepe pombo",num:35133513551351,},
    {name:"Juan pedro",num:35133513551351,},
    {name:"Pedro Juan",num:35133513551351,},
]
const ContactContainer = document.getElementById("contact")

function contactFunction(){ 
    for (const num of Contact)
    {    
        let div = document.createElement("div");
        div.setAttribute("class", "contactCards");
        div.innerHTML = 
                `   
                <img src="../assets/imgs/perfil.jpg" alt="imgTelefono">
                <div>
                    <h5>${num.name}</h5>
                    <p>${num.num}</p>
                </div>
                `;
                ContactContainer.appendChild(div)
    }
}
contactFunction()