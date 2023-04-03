import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemFromComponent } from './add-item-from.component';

describe('AddItemFromComponent', () => {
  let component: AddItemFromComponent;
  let fixture: ComponentFixture<AddItemFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
