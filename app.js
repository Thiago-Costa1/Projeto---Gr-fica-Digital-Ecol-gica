// Início do javascript do menu hamburguer
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));


	// Início do javascript do carrossel

	var radio = document.querySelector('.manual-btn')
	var cont = 1

	document.getElementById('radio1').checked = true 	

	setInterval(() => {
		proximaImg()
	}, 5000)

	function proximaImg(){
		cont++

		if(cont > 3){
			cont = 1
		}

		document.getElementById('radio'+cont).checked = true 

	}