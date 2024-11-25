import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStarShipsComponent } from './all-star-ships.component';

describe('AllStarShipsComponent', () => {
  let component: AllStarShipsComponent;
  let fixture: ComponentFixture<AllStarShipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllStarShipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllStarShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
