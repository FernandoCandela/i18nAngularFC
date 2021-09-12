import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiniestrosAddComponent } from './siniestros-add.component';

describe('SiniestrosAddComponent', () => {
  let component: SiniestrosAddComponent;
  let fixture: ComponentFixture<SiniestrosAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiniestrosAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiniestrosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
