import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers:[AccountService]
})
export class AppComponent implements OnInit {
  accounts:{name: string, status:string}[] = [];

  constructor(private accountservices: AccountService) {}
   ngOnInit(){

       this.accounts= this.accountservices.accounts;
   }
}
