// Отримуємо елементи форми
const form = document.getElementById('myForm');

// Додаємо обробник події на відправлення форми
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо стандартне відправлення форми (перезавантаження сторінки)

    // Перевірка на незаповнені поля
    const formElements = form.elements;
    let allFieldsFilled = true;

    // Перевірка кожного поля
    for (let i = 0; i < formElements.length; i++) {
        const field = formElements[i];
        if (field.type !== 'submit' && field.value.trim() === '') {
            allFieldsFilled = false;
            break;
        }
    }

    if (!allFieldsFilled) {
        alert('Будь ласка, заповніть всі поля!');
    } else {
        // Якщо всі поля заповнені, створюємо об'єкт з даними форми
        const formData = {};
        for (let i = 0; i < formElements.length; i++) {
            const field = formElements[i];
            if (field.type !== 'submit') {
                formData[field.name] = field.value;
            }
        }

        // Виводимо дані в консоль
        console.log(formData);

        // Перевірка і збереження в локальному сховищі
        let formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
        formDataArray.push(formData);
        localStorage.setItem('formDataArray', JSON.stringify(formDataArray));

        // Очищаємо поля форми
        form.reset();
    }
});
