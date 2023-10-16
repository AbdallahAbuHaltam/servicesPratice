import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
@Input() account:{name:string,status:string};
@Input() id:number;
@Output() statusChanges=new EventEmitter<{id:number,status:string}>();


onSetTo(status: string){
  this.statusChanges.emit({id: this.id, status});
  console.log('A server status changed, new status: ' + status);

}
}
