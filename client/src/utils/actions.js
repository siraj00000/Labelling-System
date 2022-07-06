const logoutHandler = () => {
    localStorage.removeItem("authToken");
    document.location = "/"
}

const removeStatus = func => setTimeout(() => func(""), 3000);

export { logoutHandler, removeStatus }