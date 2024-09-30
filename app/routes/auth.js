module.exports = (app) => {       
    app.get("/login", (req, res) => {
        app.app.controllers.auth.login(app, req, res);
    })

    app.post("/auth", (req, res) => {
        app.app.controllers.auth.auth(app, req, res);
    })
}