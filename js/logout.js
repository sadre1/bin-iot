const logoutBtn = document.getElementById('logout-btn');

const logout = () => {
    localStorage.removeItem('userData');
    window.location.href = "http://127.0.0.1:5500/index.html";
}

logoutBtn.addEventListener('click', logout);