import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCanalsComponent } from './liste-canals.component';

describe('ListeCanalsComponent', () => {
  let component: ListeCanalsComponent;
  let fixture: ComponentFixture<ListeCanalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCanalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeCanalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
