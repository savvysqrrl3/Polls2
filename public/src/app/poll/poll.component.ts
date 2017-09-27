import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  poll;
  poll_id;
  constructor(private _itemService: ItemService, private _router: Router, private _route: ActivatedRoute,) 
  {
    this._route.paramMap.subscribe( params => {
      console.log(params.get('id'));
      this.poll_id = params.get('id');
      console.log(this.poll_id);
    })
    this._itemService.pollObserver.subscribe((poll) => {
      console.log("Poll retrieved from service:", poll);
            this.poll = poll;
            console.log("Back at the component...", this.poll);
      
          })

    this.getPollInfo(); 
   }

  ngOnInit() {
  }

  getPollInfo(){
    this._itemService.get1Poll(this.poll_id)
    console.log("At component:", this.poll);
  }

  opt1Vote(){
    this.poll.votes1 += 1;
    // this._itemService.updateVote(this.poll_id, this.poll.votes1)
  }
  opt2Vote(){
    this.poll.votes2 += 1;
  }
  opt3Vote(){
    this.poll.votes3 += 1;
  }
  opt4Vote(){
    this.poll.votes4 += 1;
  }


// closing curly brace, don't delete!
}
