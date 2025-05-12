// Отримуємо всі кнопки для відкриття модальних вікон
const openModalButtons = document.querySelectorAll('.open-modal-btn');

// Отримуємо всі модальні вікна
const modals = document.querySelectorAll('.modal');

// Отримуємо кнопки закриття модальних вікон
const closeButtons = document.querySelectorAll('.close-btn');

// Функція для відкриття модального вікна
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = "block";
    });
});

// Функція для закриття модального вікна
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = "none";
    });
});

// Закриття модального вікна при натисканні за межами вікна
window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Закриття модального вікна при натисканні на клавішу Esc
window.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        modals.forEach(modal => {
            modal.style.display = "none";
        });
    }
});
