module.exports = (app) => {
    app.get("/api/getAllGroups", (req, res) => {
        app.app.controllers.api.getAllGroups(app, req, res);
    });
}