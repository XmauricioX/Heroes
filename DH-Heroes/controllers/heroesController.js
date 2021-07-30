const path = require("path");

module.exports = controller = {
    index:(req,res) => {
        res.sendFile(path.join(__dirname, "../views/index.html"))
    },
    heroe:(req,res) => {
        let id = req.params.id;
    
        switch (id) {
            case "babbage":
                res.sendFile(path.join(__dirname, "../views/babbage.html"))
                break;
            case "berners-lee":
                res.sendFile(path.join(__dirname, "../views/berners-lee.html"))
                break;
            case "clarke":
                res.sendFile(path.join(__dirname, "../views/clarke.html"))
                break;
            case "hamilton":
                res.sendFile(path.join(__dirname, "../views/hamilton.html"))
                break;
            case "hopper":
                res.sendFile(path.join(__dirname, "../views/hopper.html"))
                break;
            case "lovelace":
                res.sendFile(path.join(__dirname, "../views/lovelace.html"))
                break;
            case "turing":
                res.sendFile(path.join(__dirname, "../views/turing.html"))
                break;
            default:
                res.send(`el heroe ${id} no existe unu`)
                break;//el default no funca
        }
    }
}
