var mobileController = require('./controllers/mobileController');

module.exports = function(app){
    app.route('/mobiles')
        .get(mobileController.getAll)
    
    app.route('/home')
        .get(mobileController.getHomePage)

}