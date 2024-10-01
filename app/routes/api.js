module.exports = (app) => {
    app.get("/getAllGroups", (req, res) => {
        app.app.controllers.api.getAllGroups(app, req, res);
    });
}