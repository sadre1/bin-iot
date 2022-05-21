const form = document.getElementById("auth_form");
const validUsers = [
    {
        username: 'Sadrealam',
        password: 'sadrealam'
    },
    {
        username: 'root',
        password: 'root'
    },
    {
        username: 'username',
        password: 'password'
    }
]

// on invalid authentication
const invalidCred = () => {
    alert('Invalid Credentials !');
}

// on valid authentication
const validCred = (un, pw) => {
    const userData = {
        "username": un,
        "password": pw
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    window.location.href = "http://127.0.0.1:5500/homepage.html";
}

// authentication
const authenticate = (un, pw) => {
    if (un.trim().length === 0 || pw.trim().length === 0)
        return false;


    const isValid = validUsers.some((data) => {
        return data.username === un && data.password === pw
    });

    isValid ? validCred(un, pw) : invalidCred();
}

// on form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    authenticate(username, password);
});