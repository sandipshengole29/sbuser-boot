import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsideBarComponent } from './lside-bar.component';

describe('LsideBarComponent', () => {
  let component: LsideBarComponent;
  let fixture: ComponentFixture<LsideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LsideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
