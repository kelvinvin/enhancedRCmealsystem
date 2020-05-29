const AuthenticationController = require('./controllers/AuthenticationController')
const MealsController = require('./controllers/MealsController')

module.exports = (app) => {
    app.post('/register', 
        AuthenticationController.register)

    app.post('/login',
        AuthenticationController.login)

    app.get('/HomePage',
        MealsController.getMeals)

    app.post('/HomePage', 
        MealsController.addMeal)
}