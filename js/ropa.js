const datos_car=[
  {
    img:"img/img1.jpg",
    title:"Sudadera de ajolote",
	description:"Sudadera bicolor rosa/verde axolotl ajolote.",
    fecha:" Fecha Salidad:01/3/2021",
    price_before:"$345.00",
    price_now:"$241.50",
  },
  {
    img:"img/img2.jpg",
    title:"Playera de ajolote",
    fecha:" Fecha Salidad:01/3/2021",
	description:"Camisetas de ajolote con estampado para hombre y mujer, ropa de estilo informal.",
    price_before:"$180.00",
    price_now:"$126.00",
  },
]

const cont_parent = document.getElementById("cont_parent");

for(let index of datos_car){
  cont_parent.innerHTML+=`
   <div class="conte ">
         <div class="card stromtroper">
             <img src=${index.img} alt="">
         </div>
         <div class="informacion">
             <h1>${index.title}</h1>
            <p class="fecha">
                ${index.fecha}
            </p>
			<p class="fecha">
                ${index.description}
            </p>
         </div>
         <div class="precio">
             <div class="box-precio">
                 <span class="precio1"><strike>${index.price_before}</strike> </span>
             <span class="precio2"><b>${index.price_now}</b></span>
             </div>
             <span class="shoping"><i class="fas fa-cart-plus"></i></span>
         </div>
     </div>
  `
}
