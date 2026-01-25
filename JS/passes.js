document.querySelectorAll('.buy-now-trigger').forEach(button => {
    button.addEventListener('click', (e) => {
        // Find the title within the same card
        const passName = button.closest('.pass-card').querySelector('.pass-title').innerText;
        alert(`Redirecting to payment for ${passName}...`);
    });
});