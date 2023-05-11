import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeRecetteComponent } from './add-type-recette.component';

describe('AddTypeRecetteComponent', () => {
  let component: AddTypeRecetteComponent;
  let fixture: ComponentFixture<AddTypeRecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeRecetteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypeRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
