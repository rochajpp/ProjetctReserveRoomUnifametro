module.exports.main = async (app, req, res) => {
    if(req.session.authenticated){
        const connection = require("../../config/dbConfig.js");
        const RoomGroup = new app.app.models.RoomGroup(connection);

        const groups = await RoomGroup.getAll();

        res.render("reservation/index.ejs", {info: {}, groups: groups});
        return;
    }
    res.redirect("/login");
    return;
}

module.exports.search = async (app, req, res) => {

    function convertHour(time){
        [hour, minute] = time.split(':').map(Number);
        return hour * 60 + minute;
    }

    const {groupId, date} = req.body;

    const connection = require('../../config/dbConfig');
    const Room = new app.app.models.Room(connection);
    const Reservation = new app.app.models.Reservation(connection);
    const RoomGroup = new app.app.models.RoomGroup(connection);

    //Obtendo salas do grupo selecionado
    const rooms = await Room.getAllByGroup(groupId);

    //Obtendo grupo
   
    const groupDb = await RoomGroup.getById(groupId);
    const group = groupDb[0];
    //Obtendo todas as reservas da data selecionada
    const reservations = await Reservation.getAllByDate(date);

    let info  = [];
    rooms.forEach((room) => {
// Calculando e criando todos os horários da sala ========================
        roomHours = [];

        timeStart = convertHour(group.StartTime);
        timeEnd = convertHour(group.EndTime);

        interval = (timeEnd - timeStart) / 60;
        quantHours = interval / room.StayTime;

        hour = timeStart / 60;
        for(var i = 0; i < quantHours; i++){
            roomHours.push(hour);
            hour += room.StayTime;
        }

// ========================================================================
    
        reservations.forEach((reservation) => {
            if(room.Id == reservation.RoomsId){
                startHour = convertHour(reservation.StartHour) / 60
                const index = roomHours.indexOf(startHour);
                if(index != -1){
                    roomHours.splice(index, 1);
                }
            }
        })

        info.push({
            Id: room.Id,
            Name: room.Name,
            Date: date,
            HoursAvailable: roomHours,
        });
    })

    groups = await RoomGroup.getAll();
    res.render("reservation/index", {info: info, groups: groups});
    return; 
}