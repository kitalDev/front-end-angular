import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCotisationComponent } from './delete-cotisation.component';

describe('DeleteCotisationComponent', () => {
  let component: DeleteCotisationComponent;
  let fixture: ComponentFixture<DeleteCotisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCotisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCotisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
