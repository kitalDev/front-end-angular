import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAsideComponent } from './control-aside.component';

describe('ControlAsideComponent', () => {
  let component: ControlAsideComponent;
  let fixture: ComponentFixture<ControlAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlAsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
