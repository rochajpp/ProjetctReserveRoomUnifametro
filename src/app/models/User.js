const BaseModel = require("./BaseModel")();

class User extends BaseModel{
    constructor(context){
        super("users", context);
        this._context = context;
    }

    async checkUser(user){
        try{
            const [rows] = await this._context.query("SELECT * FROM users WHERE ir='" + user.IR + "' AND password='" + user.password + "'");
            return rows;
        }catch(err){
            console.error(err);
            return null;
        }
    }
}

module.exports = () => {
    return User;
};