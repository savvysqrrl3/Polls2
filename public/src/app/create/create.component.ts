import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { Poll } from '../poll';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newP = new Poll();
  username;
  constructor(private _itemService: ItemService, private _router: Router) 
  {
    // this._itemService.userObserver.subscribe((currentUser) => {
    //   console.log("Username from service is:", currentUser);
    //         this.username = currentUser;
    //         console.log("In the component, username is set to", this.username);
      
    //       })
   
    this.username = this._itemService.currentUser;
    console.log('CreateComponent - username is: ', this.username)
   }

  ngOnInit() {
  }

  newPoll(){
    console.log(this.newP);
    this.newP.author = this.username;
    console.log(this.newP.author);
    this._itemService.addPoll(this.newP);
    // this.newP = new Poll;
    this._router.navigate(['/dashboard']);
  }

}
