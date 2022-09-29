// let boton = document.querySelector(".colorido");
// boton.onclick = function(){
//    this.style.display = "none";
// }

// boton.addEventListener("click", () => contenedor.classList.add("desaparecer"));

// let contenedor = document.querySelector(".text")

let boton = document.querySelector(".colorido");
let recipiente = document.querySelector(".colores__colores")
boton.addEventListener("click", cambiaColor)

function cambiaColor(){
   let colorAleatorio = "#" + generarNuevoColor() + generarNuevoColor() + generarNuevoColor()
   let divdiv = document.createElement("div");
   divdiv.innerHTML = "🕸️"
   divdiv.classList = "color__nuevo"
   divdiv.style.background = colorAleatorio
   boton.after(divdiv);
}

function generarNuevoColor(){
	
	return Math.round(Math.random()*255).toString(16);
}

 