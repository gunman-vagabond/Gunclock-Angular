import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GunclockDeleteComponent } from './gunclock-delete.component';

describe('GunclockDeleteComponent', () => {
  let component: GunclockDeleteComponent;
  let fixture: ComponentFixture<GunclockDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GunclockDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GunclockDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
