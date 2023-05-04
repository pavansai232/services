import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.services';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers:[LoggingService]
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private LoggingService:LoggingService,
    private accountservices:AccountService){
      this.accountservices.statusUpdated.subscribe(
        (status: string)=> alert('New Status'+ status)
      )
    }
   
  onCreateAccount(accountName: string, accountStatus: string) {
    //this.accountAdded.emit({
      //name: accountName,
      //status: accountStatus
  //  });
   // const service = new LoggingService();
    //service.logStatusChange(accountStatus);
    this.accountservices.addAccount(accountName,accountStatus);
    //this.LoggingService.logStatusChange(accountStatus);
  }
}
