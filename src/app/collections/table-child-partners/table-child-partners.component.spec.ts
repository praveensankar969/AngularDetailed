import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChildPartnersComponent } from './table-child-partners.component';

describe('TableChildPartnersComponent', () => {
  let component: TableChildPartnersComponent;
  let fixture: ComponentFixture<TableChildPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableChildPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableChildPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
