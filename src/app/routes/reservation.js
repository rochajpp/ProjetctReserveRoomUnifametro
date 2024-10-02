module.exports = (app) => {
    app.get("/reservation", (req, res) => {
        app.app.controllers.reservation.main(app, req, res);
    })
}