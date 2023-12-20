import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSlackComponent } from './page-slack.component';

describe('PageSlackComponent', () => {
  let component: PageSlackComponent;
  let fixture: ComponentFixture<PageSlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSlackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageSlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
