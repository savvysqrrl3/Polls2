import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser = {
    name: "",
  };
  constructor(private _itemService: ItemService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("New user's name is:", this.newUser.name);
    this._itemService.currentUser = this.newUser.name;
    console.log(this._itemService.currentUser)
    this._router.navigate(['/dashboard']);
    }
    
  
}
