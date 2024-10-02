const BaseModel = require("./BaseModel")();

class Reservation extends BaseModel {
    constructor(context) {
        super("reservations", context);
        this._context = context;
    }

    async getAllComplete() {
        const query = "SELECT Reservations.Id AS ReservationId, Reservations.StartHour, Reservations.EndHour, Reservations.ReservationDate, Reservations.CreationDate AS ReservationCreationDate, Users.Id AS UserId, Users.FirstName, Users.LastName, Users.IR, Users.CreationDate AS UserCreationDate, UserTypes.Id AS UserTypeId, UserTypes.Name AS UserTypeName, UserTypes.Admin, UserTypes.CreationDate AS UserTypeCreationDate, Rooms.Id AS RoomId, Rooms.Name AS RoomName, Rooms.StayTime, Rooms.CreationDate AS RoomCreationDate, RoomGroups.Id AS RoomGroupId, RoomGroups.Name AS RoomGroupName, RoomGroups.StartTime AS RoomGroupStartTime, RoomGroups.EndTime AS RoomGroupEndTime, RoomGroups.CreationDate AS RoomGroupCreationDate FROM Reservations INNER JOIN Users ON Reservations.UsersId = Users.Id INNER JOIN UserTypes ON Users.UserTypesId = UserTypes.Id INNER JOIN Rooms ON Reservations.RoomsId = Rooms.Id INNER JOIN RoomGroups ON Rooms.RoomGroupsId = RoomGroups.Id";
        const [rows] = await this._context.query(query);
        return rows;
    }
}

module.exports = () => {
    return Reservation;
};