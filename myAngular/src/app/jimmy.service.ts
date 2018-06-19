import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class JimmyService {

  constructor(private _http: HttpClient) {
    this.getTasks();
  }

  getTasks() {
    const tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log('got tasks by JIMMY.service.ts!', data));
  }
}
