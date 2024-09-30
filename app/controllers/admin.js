module.exports.main = async (app, req, res) => {
    if(req.session.authenticated){
        res.render("admin/index");
    } else{
        res.render("auth/login");
    }
}