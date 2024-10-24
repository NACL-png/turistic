document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    const descricao = document.getElementById('descricao');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const destino = card.getAttribute('data-destino');
            const imagem = card.getAttribute('data-imagem');

            descricao.innerHTML = `
                <strong>Você selecionou ${destino}!</strong>
                <p>Uma cidade cheia de encantos e aventuras.</p>
                <img src="${imagem}" alt="${destino}">
            `;
            descricao.style.opacity = 1; // Faz a descrição aparecer
        });
    });

    // Animação ao entrar na seção de galeria
    const gallerySection = document.getElementById('galeria');
    gallerySection.style.opacity = 0;
    setTimeout(() => {
        gallerySection.style.transition = 'opacity 1s';
        gallerySection.style.opacity = 1;
    }, 100);
});
