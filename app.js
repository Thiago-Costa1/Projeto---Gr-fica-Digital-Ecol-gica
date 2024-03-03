	// Início do javascript do menu hamburguer
	const hamburger = document.querySelector(".hamburger"); // Seleciona o elemento com a classe "hamburger"
	const nav = document.querySelector(".nav"); // Seleciona o elemento com a classe "nav"

	// Adiciona um ouvinte de evento de clique ao hamburger para alternar a classe "active" na navegação
	hamburger.addEventListener("click", () => nav.classList.toggle("active"));


	// Início do javascript do carrossel

	// Seleciona o elemento com a classe "manual-btn" e define a variável cont como 1
	var radio = document.querySelector('.manual-btn')
	var cont = 1

	// Marca o primeiro botão de rádio como selecionado
	document.getElementById('radio1').checked = true 	

	// Configura um intervalo para chamar a função proximaImg a cada 5000 milissegundos (5 segundos)
	setInterval(() => {
		proximaImg()
	}, 5000)

	// Função para avançar para a próxima imagem no carrossel
	function proximaImg(){
		cont++

	// Reinicia o contador se atingir o número máximo de imagens (3 no caso)
		if(cont > 3){
			cont = 1
		}

	// Marca o botão de rádio correspondente à próxima imagem como selecionado
		document.getElementById('radio'+cont).checked = true 

	}

