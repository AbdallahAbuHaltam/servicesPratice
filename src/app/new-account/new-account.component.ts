import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService:LoggingService,private accountService:AccountService){
    accountService.statusUpdated.subscribe(
      (status:string) =>{
        alert('New Status is '+status);
      }
    );
  }

  onCreateAccount(accountName:string,accountStatus:string){
    this.accountService.accountAdd(accountName,accountStatus);
  }
}
