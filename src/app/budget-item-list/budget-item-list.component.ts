import { Component,OnInit, Input, Output, EventEmitter} from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})



export class BudgetItemListComponent implements OnInit {

@Input() budgetItems!: BudgetItem[]; // problem 1:28:20 sec https://www.youtube.com/watch?v=sU4z4Ti-8OQ&t=5351s&ab_channel=Devstackr
@Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

@Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog){

  }
  ngOnInit(): void {
    
  }


OnDeleteButtonClick(item: BudgetItem){
this.delete.emit(item);

}

onCardClicked(item: BudgetItem){
  // edit

  const dialogRef = this.dialog.open(EditItemModalComponent,{
    width:'580px',
    data: item
  });

dialogRef.afterClosed().subscribe(result =>{

  if(result){
    // update 
    //this.budgetItems[this.budgetItems.indexOf(item)] = result;
    this.update.emit({
      old: item,
      new: result
    });


  }
})

}


}


export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
  
  }