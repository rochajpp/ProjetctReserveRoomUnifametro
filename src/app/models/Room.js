const BaseModel = require("./BaseModel")();

class Room extends BaseModel{
    constructor(context){
        super("rooms", context);
        this._context = context;
    }

}

module.exports = () => {
    return Room;
};