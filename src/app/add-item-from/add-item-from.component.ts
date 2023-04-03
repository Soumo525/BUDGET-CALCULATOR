import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
//import { Component, Input } from '@angular/core';
import{ NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-add-item-from',
  templateUrl: './add-item-from.component.html',
  styleUrls: ['./add-item-from.component.scss']
})
export class AddItemFromComponent implements OnInit{
 @Input() item: BudgetItem = new BudgetItem('', 0);// reminder // ei khany null kaj kor6a na tai 0 di6i
 @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
 
 isNewItem!: boolean;
 
 
 
 constructor(){ }
ngOnInit() {
if(this.item){
  this.isNewItem = false;
}else{
  this.isNewItem = true;
  this.item = new BudgetItem('', 0);
}

 }

  onSubmit(form: NgForm){
   this.formSubmit.emit(form.value);
   form.reset();
  }
}
