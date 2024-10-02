const BaseModel = require("./BaseModel")();

class UserType extends BaseModel{
    constructor(context){
        super("usertypes", context);
        this._context = context;
    }
}

module.exports = () => {
    return UserType;
};