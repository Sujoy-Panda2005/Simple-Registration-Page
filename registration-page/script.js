const whatsappButton = document.getElementById('whatsappButton');
const clickCounter = document.getElementById('clickCounter');
const registrationForm = document.getElementById('registrationForm');

let shareCount = parseInt(localStorage.getItem('shareCount')) || 0;
clickCounter.textContent = shareCount;

// Check if form was already submitted
if (localStorage.getItem('formSubmitted') === 'true') {
    disableForm();
}

whatsappButton.addEventListener('click', () => {
    if (shareCount >= 5) {
        alert('Sharing complete. Please continue with registration.');
        return;
    }

    const message = "Hey Buddy, Join Tech For Girls Community!";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    shareCount++;
    localStorage.setItem('shareCount', shareCount);
    clickCounter.textContent = shareCount;

    if (shareCount === 5) {
        alert('Sharing complete. Please continue with registration.');
    }
});

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (shareCount < 5) {
        alert('Please complete sharing (5 times) before submitting the form.');
        return;
    }

    alert('🎉 Your submission has been recorded. Thanks for being part of Tech for Girls!');
    localStorage.setItem('formSubmitted', 'true');
    disableForm();
});

function disableForm() {
    const inputs = registrationForm.querySelectorAll('input');
    inputs.forEach(input => input.disabled = true);
    registrationForm.querySelector('button').disabled = true;
    whatsappButton.disabled = true;
}