const adminLogin = async (email , password) => {
    if(email === 'admin@gmail.com' && password === 'admin@1234') {
        return true;
    }
}

module.exports = {
    adminLogin
}