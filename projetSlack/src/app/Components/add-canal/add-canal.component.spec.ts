import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCanalComponent } from './add-canal.component';

describe('AddCanalComponent', () => {
  let component: AddCanalComponent;
  let fixture: ComponentFixture<AddCanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCanalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
