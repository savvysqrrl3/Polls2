import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {  BehaviorSubject } from 'rxjs/Rx';
import 'rxjs';

@Injectable()
export class ItemService {

  currentUser;
  onePoll;
  pollsList = [];

  constructor(private _http: Http) { }
  
  userObserver = new BehaviorSubject(this.currentUser);
  pollObserver = new BehaviorSubject(this.onePoll);
  Observer = new BehaviorSubject(this.pollsList);



  addPoll(newPoll){
    console.log("Arrived at service and data is", newPoll)
  this._http.post('/polls', newPoll)
  .subscribe(
    (response) => {
      console.log("returned to Angular service");
      this.retrieveAll();
    },
    (err) => {
      console.log("failed to add poll", err)
    }
  )  
  }
  // end of addPoll function

  retrieveAll() {
    return this._http.get('/listpolls')
    .subscribe (
      (response) => {
        console.log("success", response.json() );
        this.pollsList = response.json();
        this.Observer.next(this.pollsList);
      },
      (err) => {
        console.log("failed to retrieve all", err.json )
      }
    )
  }
// end of retrieveAll function


get1Poll(id){
  console.log("At services and id is:", id);
  this._http.get(`/polls/${id}`)
  .subscribe (
    (response) => {
      console.log("success, poll returned to service:", response.json() );
      this.onePoll = response.json();
      this.pollObserver.next(this.onePoll);
    
    },
    (err) => {
      console.log("failed to retrieve poll", err.json )
    }
  )
}
// end of get1Poll function

  removePoll(id){
    console.log("At services and id is:", id);
    this._http.delete(`/polls/${id}`)
    .subscribe (
      (response) => {
        console.log("success", response.json() );
        this.onePoll = response.json();
        this.retrieveAll();
      },
      (err) => {
        console.log("failed to remove poll", err.json )
      }
    )
  }
  // end of removePoll function

  updateVotes(id, poll){
    this._http.put(`/polls/${id}`, {poll: poll })
    .subscribe (
      (response) => {
        console.log("successful update, returned to service", response.json() );
        // this.onePoll = response.json();
        // this.pollObserver.next(this.onePoll);
      },
      (err) => {
        console.log("failed to update item", err.json )
      }
    )
  }
  // end of update function


// this is the closing brace for export class; don't overwrite!
}
