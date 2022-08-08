const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");
    document.location = "/";
};

const removeStatus = func => setTimeout(() => func(""), 3000);

const token = localStorage.getItem('authToken');
const role = Number(localStorage.getItem('role'));

export { logoutHandler, removeStatus, token, role };