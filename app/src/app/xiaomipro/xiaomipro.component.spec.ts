import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XiaomiproComponent } from './xiaomipro.component';

describe('XiaomiproComponent', () => {
  let component: XiaomiproComponent;
  let fixture: ComponentFixture<XiaomiproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XiaomiproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XiaomiproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
