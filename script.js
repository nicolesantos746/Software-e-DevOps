
async function carregarGatinhoAleatorio() {
    try {
       
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
      
        const data = await response.json();
        
     
        const urlGatinho = data[0].url;

        console.log("URL do gatinho capturada:", urlGatinho);

    
        document.getElementById('foto-gato').src = urlGatinho;

    } catch (error) {
        console.error("Erro ao buscar o gatinho:", error);
    }
}


carregarGatinhoAleatorio();