var mobiles = require('../data/mobiles.json')

exports.getAll = (req, res) => {
    res.send(mobiles);
}

exports.getHomePage = (req,res) => {
    res.send('<h1>In home page</h1>')
}