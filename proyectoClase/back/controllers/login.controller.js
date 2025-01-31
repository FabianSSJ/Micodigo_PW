//const modelUser = require("../models/user.models");
const modelCredentials = require("../models/credentials.model");

const getUser = async (dniUser) => {
    const result = await modelUser.getUser(dniUser);
    return result;
}

const getLogin = async (username, password) => {
    const result = await modelCredentials.findOne({
        where:{username: username, password: password},
    });
    return result;
}


module.exports = {
    getUser,
    getLogin,
};