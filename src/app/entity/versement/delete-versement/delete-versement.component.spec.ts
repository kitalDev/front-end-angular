import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVersementComponent } from './delete-versement.component';

describe('DeleteVersementComponent', () => {
  let component: DeleteVersementComponent;
  let fixture: ComponentFixture<DeleteVersementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVersementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteVersementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
