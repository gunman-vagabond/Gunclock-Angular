import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GunclockEditComponent } from './gunclock-edit.component';

describe('GunclockEditComponent', () => {
  let component: GunclockEditComponent;
  let fixture: ComponentFixture<GunclockEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GunclockEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GunclockEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
