function calcularDias() {
    const dataCasamento = new Date('2025-07-03');
    const hoje = new Date();
    const diferenca = Math.ceil((dataCasamento - hoje) / (1000 * 60 * 60 * 24));
    document.getElementById('contador').textContent = diferenca;
}
calcularDias();

function openLightbox(img) {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').classList.add('active');
}
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}
