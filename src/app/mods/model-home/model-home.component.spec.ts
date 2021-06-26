import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelHomeComponent } from './model-home.component';

describe('ModelHomeComponent', () => {
  let component: ModelHomeComponent;
  let fixture: ComponentFixture<ModelHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
