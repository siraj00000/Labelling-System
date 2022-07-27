const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("authToken");
    document.location = "/";
};

const removeStatus = func => setTimeout(() => func(""), 3000);

const token = localStorage.getItem('authToken');

export { logoutHandler, removeStatus, token };