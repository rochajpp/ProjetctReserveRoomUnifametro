module.exports.login = (app, req, res) => {
    if(req.session.authenticated){
        if(req.session.admin){
            res.redirect("/admin");
            return;
        }

        res.redirect("/");
        return;
    }
    res.render("auth/login");
    return;
}

module.exports.auth = async (app, req, res) => {
    if(req.session.authenticated){
        if(req.session.admin){
            res.redirect("/admin");
            return;
        }

        res.redirect("/");
        return;
    }

    const data = req.body;

    const connection = require("../../config/dbConfig.js");
    const User = new app.app.models.User(connection);

    const user = await User.checkUser(data);

    if(user.length <= 0){
        res.send("Credenciais incorretas");
        return;
    }

    const UserType = new app.app.models.UserType(connection);

    const userType = await UserType.getById(user[0].UserTypesId);

    req.session.authenticated = true;
    req.session.id = user[0].Id;
    req.session.name = user[0].FirstName + " " + user[0].LastName;
    req.session.ir = user[0].IR;

    if(userType[0].Admin){
        req.session.admin = true;
        res.redirect("/admin");
        return;
    } 
    res.redirect("/");
    return;
}