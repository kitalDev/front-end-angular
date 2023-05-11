import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAdherentComponent } from './details-adherent.component';

describe('DetailsAdherentComponent', () => {
  let component: DetailsAdherentComponent;
  let fixture: ComponentFixture<DetailsAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAdherentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
