const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

var contador = 1; //variável pública criada fora da function
		var img1="imagens/carrossel1.png";
		var img2="imagens/carrossel2.png";
		var img3="imagens/carrossel3.png";
		var tempo=4000; //1500(milessegundos) : 1000 (milessegundo) = 1,5s
		var exibir=setInterval("Exibindo()",tempo);
		 // Inicia o looping trocando imagens de 1,5 em 1,5s
	  
		function Exibindo() 
        
		{  
			document.images["slide"].src=eval("img"+contador); 
			document.getElementById("v"+contador).checked=true;
				  
			if (contador<3)
				contador++; /*contador=contador+1;*/
			else
				contador=1;
		}
				
	 	function Muda(x)
		{
			clearInterval(exibir);//interrompe o que está rodando no setInterval
			contador=x;
			exibir=setInterval("Exibindo()",tempo); //recomeçar o looping
		}