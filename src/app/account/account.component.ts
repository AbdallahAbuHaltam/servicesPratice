import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoggingService]
})
export class AccountComponent {
@Input() account:{name:string,status:string};
@Input() id:number;

constructor(private loggingService:LoggingService,private accounService:AccountService){

}

onSetTo(status: string){
  this.accounService.updateStatus(this.id,status);
  this.accounService.statusUpdated.emit(status);
}
}
