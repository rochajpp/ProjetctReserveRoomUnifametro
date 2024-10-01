module.exports.getAllGroups = async (app, req, res) => {
    const connection = require("../../config/dbConfig.js");
    const RoomGroup = new app.app.models.RoomGroup(connection);

    const [rows] = await RoomGroup.getAll();

    res.send(rows);
    return;
}