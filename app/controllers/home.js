module.exports.main = (app, req, res) => {
    if(req.session.authenticated){
        const user = {
            Id: req.session.Id,
            Name: req.session.name,
            Ir: req.session.ir
        };
        if(req.session.admin){
            res.redirect("admin/index");
            return;
        }
        res.redirect("/reservation");
        return;
    }

    res.render("home/index");
    return;
}