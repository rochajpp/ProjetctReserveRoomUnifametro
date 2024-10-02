module.exports.main = async (app, req, res) => {
    if(!req.session.authenticated){
        res.redirect("/login");
        return;
    }

    if(!req.session.admin){
        res.redirect("/");
        return
    }
    res.render("admin/index");
    return;
}