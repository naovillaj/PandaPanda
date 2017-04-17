var imagen = document.getElementsByClassName("cerrar");
var equis = document.getElementsByClassName("equis");
var origen = document.getElementById("origen");
var extincion = document.getElementById("extincion");
var restaurar = document.getElementById("restaurar");
var origenPanda = document.getElementById("origenPanda");
var extincionPanda = document.getElementById("extincionPanda");
var imagenPanda = document.getElementById("pandaImagen");

for(var i=0; i<imagen.length; i++){

	equis[i].addEventListener("click", function(){

		console.log(this);

		this.parentNode.style.display = "none";


	})

}

origen.addEventListener("click",function(){

	origenPanda.classList.toggle("active");
})

extincion.addEventListener("click",function(){

	extincionPanda.classList.toggle("active");
})



restaurar.addEventListener("click",function(){

	for(var i=0; i<imagen.length; i++){

		imagen[i].style.display = "inline-block";	

	}

})