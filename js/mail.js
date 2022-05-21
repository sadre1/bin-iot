const form = document.getElementById("contact-us")
const name = document.getElementById("name-input")
const mail = document.getElementById("email-input")
const phone = document.getElementById("phone-input")
const message = document.getElementById("user-message")

const adminMail = 'fashel3939@gmail.com';

const sendMail = () => {
    try {
        window.open(`mailto:${adminMail}?subject=${`Message from ${mail.value}` }&body=${message.value}`);
    } catch (error) {
        alert("Mail could not be sent !");
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendMail();
});