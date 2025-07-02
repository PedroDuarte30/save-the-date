function calcularDias() {
    // Data do casamento: 3 de julho de 2025
    const dataCasamento = new Date(2025, 6, 3); // Mês 6 é julho (pois começa do 0)
    
    // Data de hoje (zerando hora)
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);  // Zera a hora, minuto, segundo e milissegundo
    
    // Calculando a diferença em milissegundos
    const diferencaMs = dataCasamento - hoje;
    
    // Se a diferença for negativa, significa que o casamento já aconteceu
    if (diferencaMs < 1) {
        document.getElementById('contador').textContent = "Hoje é o grande dia! 🎉";
    } else {
        // Convertendo a diferença em milissegundos para dias
        const diasRestantes = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));
        
        // Exibindo o número de dias restantes
        document.getElementById('contador').textContent = diasRestantes + " dias";
    }
}

// Chama a função para calcular os dias restantes
calcularDias();

function openLightbox(img) {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').classList.add('active');
}
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}
