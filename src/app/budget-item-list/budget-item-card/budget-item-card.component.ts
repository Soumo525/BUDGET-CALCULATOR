import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

@Input() item!: BudgetItem; // problem 1:33:16 sec
@Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
@Output() cardClick: EventEmitter<any> = new EventEmitter<any>();


  constructor(){}
ngOnInit(): void {
  
}

onXButtonClick(){
this.xButtonClick.emit();
}

onCardClick(){
this.cardClick.emit();
}

}
