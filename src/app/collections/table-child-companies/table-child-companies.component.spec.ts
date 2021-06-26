import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChildCompaniesComponent } from './table-child-companies.component';

describe('TableChildCompaniesComponent', () => {
  let component: TableChildCompaniesComponent;
  let fixture: ComponentFixture<TableChildCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableChildCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableChildCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
