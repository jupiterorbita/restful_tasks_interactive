import { JimmyService } from './jimmy.service';
import { BobbyService } from './bobby.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class AppComponent implements OnInit { // 0
export class AppComponent implements OnInit {
  newTask: any;
  selectedTask = null; // to show the update
  task_arr = [];

  constructor(
    private _bobbyService: BobbyService, // 2
    private _jimmyService: JimmyService // 3
  ) { }

  ngOnInit() {
    this.newTask = {title: '', description: '', };
    this.getTasks();
  }



  onSubmit() {
    console.log('============  form submitted ===========');
    console.log(this.newTask);
    console.log('formdata =========>', this.newTask);
    const myObservable = this._bobbyService.addTask(this.newTask);
    myObservable.subscribe((data_response) => {
      console.log('data_response', data_response);
    });
      this.newTask = {};
      this.getTasks();
    }






    showDivUpdate(task) {
      this.selectedTask = task;
    }


// ============== UPDATE / EDIT TASK ==============
  update_task(task) {
    console.log('============  form updated ===========');
    console.log('formdata ======>', task);
    const myObservable = this._bobbyService.updateTask(task);
    myObservable.subscribe((data_response) => {
      console.log('data_response', data_response);
    });
    // this.selectedTask = null;
    this.getTasks();
    }










  onButDel(id) {
    console.log('pushed delete');
    const myObservable = this._bobbyService.destroy(id);
    myObservable.subscribe((data_response) => {
      console.log('data_response from del', data_response);
    });
    this.getTasks();
  }





  // onButtonClickBOB() {
  //   this.getTasksFromService();
  // }

  onButShowDesc(task): void {
    console.log('clicked event show desc', task);
    this.tasks = task;
  }


  getTasks() { // 6
    const observable = this._bobbyService.getTasks(); // 7, 10
    observable.subscribe( server_response => { // 11
      console.log('got our task_arr (bobby) app.component.ts =>!', server_response); // 12
      this.task_arr = server_response['data']; // 13
    });
  }

}
