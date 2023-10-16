import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService]
})
export class AccountComponent {
@Input() account:{name:string,status:string};
@Input() id:number;
@Output() statusChanges=new EventEmitter<{id:number,status:string}>();

constructor(private loggingService:LoggingService){

}

onSetTo(status: string){
  this.statusChanges.emit({id: this.id, status});
  this.loggingService.logStatusChange(status);
}
}
