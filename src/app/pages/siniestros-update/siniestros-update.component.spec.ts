import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiniestrosUpdateComponent } from './siniestros-update.component';

describe('SiniestrosUpdateComponent', () => {
  let component: SiniestrosUpdateComponent;
  let fixture: ComponentFixture<SiniestrosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiniestrosUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiniestrosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
