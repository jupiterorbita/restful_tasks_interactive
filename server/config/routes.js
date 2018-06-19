var taskController = require('../controllers/taskController.js')

module.exports = function(app){
    //Root retrieve all
    app.get('/tasks', taskController.index)
    //Retrieve 1
    app.get('/task/:id', taskController.retrieveOne)
    //Create
    app.post('/create', taskController.create)
    //Update
    app.put('/update/:id', taskController.update_task)
    //Delete
    app.delete('/delete/:id', taskController.destroy_task)
}

// console.log('ROUTES FILE')
// const duckController = require('../controllers/duckController.js');
// module.exports = function (app) {
//     app.get('/', duckController.index);
//     app.get('/new', duckController.newDuck);
//     app.post('/ducks', duckController.postDuck);
//     app.get('/animals/edit/:id', duckController.editDuck);
//     app.get('/animals/profile/:id', duckController.duckProfile);
//     app.post('/animals/:id', duckController.editDuckPost);
//     app.get('/animals/destroy/:id', duckController.reset);
// }