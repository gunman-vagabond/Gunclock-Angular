import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GunclockNewComponent } from './gunclock-new.component';

describe('GunclockNewComponent', () => {
  let component: GunclockNewComponent;
  let fixture: ComponentFixture<GunclockNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GunclockNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GunclockNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
