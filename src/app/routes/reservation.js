module.exports = (app) => {
    app.get("/reservation", (req, res) => {
        app.app.controllers.reservation.main(app, req, res);
    })

    app.post("/reservation/search", (req, res) => {
        app.app.controllers.reservation.search(app, req, res);
    })
}