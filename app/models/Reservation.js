const BaseModel = require("./BaseModel")();

class Reservation extends BaseModel{
    constructor(context){
        super("reservations", context);
        this._context = context;
    }
}

module.exports = () => {
    return Reservation;
};