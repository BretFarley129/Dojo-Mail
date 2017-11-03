import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmComponentComponent } from './dm-component.component';

describe('DmComponentComponent', () => {
  let component: DmComponentComponent;
  let fixture: ComponentFixture<DmComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
