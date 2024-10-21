module.exports = (app) => {
    app.get("/reservation", (req, res) => {
        app.app.controllers.reservation.main(app, req, res);
    })

    app.post("/reservation/search", (req, res) => {
        app.app.controllers.reservation.search(app, req, res);
    })

    app.get("/reservation/reserve", (req, res) => {
        app.app.controllers.reservation.reserve(app, req, res);
    })
}