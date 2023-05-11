import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAdherentComponent } from './delete-adherent.component';

describe('DeleteAdherentComponent', () => {
  let component: DeleteAdherentComponent;
  let fixture: ComponentFixture<DeleteAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAdherentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
