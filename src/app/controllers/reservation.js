module.exports.main = async (app, req, res) => {
    if(req.session.authenticated){
        const connection = require("../../config/dbConfig.js");
        const RoomGroup = new app.app.models.RoomGroup(connection);

        const groups = await RoomGroup.getAll();

        res.render("reservation/index.ejs", {groups: groups});
        return;
    }
    res.redirect("/login");
    return;
}