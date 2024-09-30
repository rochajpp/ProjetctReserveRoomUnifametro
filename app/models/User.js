const BaseModel = require("./BaseModel")();

class User extends BaseModel{
    constructor(context){
        super("users", context);
        this._context = context;
    }
}

module.exports = () => {
    return User;
};