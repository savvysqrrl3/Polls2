import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SearchPipe } from '../search.pipe'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allPolls = [];
  username;
  
  searchterms = "";

  constructor(private _itemService: ItemService, private _router: Router, private _route: ActivatedRoute,) {
    this._route.paramMap.subscribe( params => {
      console.log(params.get('id'));
 })

    this._itemService.Observer.subscribe((pollsList) => {
      console.log("Polls retrieved from service:", pollsList);
            this.allPolls = pollsList;
            console.log("Back at the component...", this.allPolls);
      
          })
          this.getPolls();
          this.username = this._itemService.currentUser;
          console.log('DashboardComponent - username is: ', this.username)
   }

  ngOnInit() {
  }

  getPolls(){
    this._itemService.retrieveAll();
   }

  removePoll(id){
    this._itemService.removePoll(id)
  }

}
