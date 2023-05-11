import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCotisationComponent } from './details-cotisation.component';

describe('DetailsCotisationComponent', () => {
  let component: DetailsCotisationComponent;
  let fixture: ComponentFixture<DetailsCotisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCotisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCotisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
