import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GunclocksComponent } from './gunclocks.component';

describe('GunclocksComponent', () => {
  let component: GunclocksComponent;
  let fixture: ComponentFixture<GunclocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GunclocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GunclocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
