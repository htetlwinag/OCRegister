import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionComponent } from './diction.component';

describe('DictionComponent', () => {
  let component: DictionComponent;
  let fixture: ComponentFixture<DictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
