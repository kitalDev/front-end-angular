import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeRecetteComponent } from './update-type-recette.component';

describe('UpdateTypeRecetteComponent', () => {
  let component: UpdateTypeRecetteComponent;
  let fixture: ComponentFixture<UpdateTypeRecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypeRecetteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTypeRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
