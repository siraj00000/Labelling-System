const roleToken = (token, role) => {
    let newToken = token.split("")
    newToken[7] = role 
    return newToken.join("")
};

module.exports = roleToken