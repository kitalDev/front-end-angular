import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVersementComponent } from './details-versement.component';

describe('DetailsVersementComponent', () => {
  let component: DetailsVersementComponent;
  let fixture: ComponentFixture<DetailsVersementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsVersementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsVersementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
