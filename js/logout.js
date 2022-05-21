const logoutBtn = document.getElementById('logout-btn');

const logout = () => {
    localStorage.removeItem('userData');
    window.location.href = "https://sadre1.github.io/bin-iot/index.html";
}

logoutBtn.addEventListener('click', logout);