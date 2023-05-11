import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideBarrComponent } from './aside-barr.component';

describe('AsideBarrComponent', () => {
  let component: AsideBarrComponent;
  let fixture: ComponentFixture<AsideBarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideBarrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideBarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
