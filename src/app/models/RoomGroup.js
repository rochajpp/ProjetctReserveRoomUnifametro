const BaseModel = require("./BaseModel")();

class RoomGroup extends BaseModel{
    constructor(context){
        super("roomgroups", context);
        this._context = context;
    }

}

module.exports = () => {
    return RoomGroup;
};