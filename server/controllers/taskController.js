const mongoose = require("mongoose");
const Task = mongoose.model("Task");

module.exports = {
  //Root retrieve all
  index: function(req, res) {
    Task.find({}, function(err, task_array) {
      if (err) {
        console.log("\nReturned error", err);
        res.json({ message: "\nError", error: err });
      } else {
        res.json({ message: "\nSuccess", data: task_array });
      }
    });
  },

  //Retrieve 1 (by task id)
  retrieveOne: function(req, res) {
    Task.findOne({ _id: req.params.id }, function(err, task) {
      if (err) {
        console.log("\nerr getting back one from server", err);
        res.json({ message: "\nError", error: err });
      } else {
        res.json({ message: "\nSuccess", data: task });
      }
    });
  },

  //Create /save
  create: function(req, res) {
    console.log("\n ====> req.body =>", req.body);
    var taskInstance = new Task({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed
    });
    taskInstance.save(function(err) {
      if (err) {
        console.log("we have an error", err);
        for (var key in err.errors) {
          res.json({ message: "error", error: err });
        }
      } else {
        console.log("successfully added a user!");
        res.json({ message: "Success save" });
      }
    });
  },

  //Update / edit (by task id)
  update_task: function(req, res) {
    Task.findOne({ _id: req.params.id }, function(err, task) {
      task.title = req.body.title;
      task.description = req.body.description;
      task.completed = req.body.completed;
      task.save(function(err) {
        if (err) {
          console.log("we have an error", err);
          for (var key in err.errors) {
            res.json({ message: "error", error: err });
          }
        } else {
          console.log("successfully added a user!");
          res.json({ message: "Success save" });
        }
      });
    });
  },
  //Delete (by task id)
  destroy_task: function(req, res) {
    // console.log(req.params.id);
    Task.remove({ _id: req.params.id }, function(err) {
      console.log("DELETEING TASK");
      if (err) {
        console.log("\nerr getting back one from server", err);
        res.json({ message: "Error cannot delete", error: err });
      } else {
        res.json({ message: "Success deleted"});
      }
    });
  }
};
