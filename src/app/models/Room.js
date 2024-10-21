const BaseModel = require("./BaseModel")();

class Room extends BaseModel{
    constructor(context){
        super("rooms", context);
        this._context = context;
    }

    async getAllByGroup(idGroup){
        try{
            const [rows] = await this._context.query("SELECT * FROM rooms WHERE RoomGroupsId = " + idGroup);

            return rows;
        } catch(err) {
            console.error("Error getting data: " + err);
            return null;
        }
    }

}

module.exports = () => {
    return Room;
};