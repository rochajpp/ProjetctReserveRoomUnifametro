module.exports = (app) => {
    app.get("/admin", (req, res) => {
        app.app.controllers.admin.main(app, req, res);
    })
}