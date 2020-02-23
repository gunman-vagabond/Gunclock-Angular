import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GunclockComponent } from './gunclock.component';

describe('GunclockComponent', () => {
  let component: GunclockComponent;
  let fixture: ComponentFixture<GunclockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GunclockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GunclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
