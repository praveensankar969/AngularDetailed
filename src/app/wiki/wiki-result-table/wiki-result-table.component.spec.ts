import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiResultTableComponent } from './wiki-result-table.component';

describe('WikiResultTableComponent', () => {
  let component: WikiResultTableComponent;
  let fixture: ComponentFixture<WikiResultTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikiResultTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
