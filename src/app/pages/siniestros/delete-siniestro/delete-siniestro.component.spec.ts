import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSiniestroComponent } from './delete-siniestro.component';

describe('DeleteSiniestroComponent', () => {
  let component: DeleteSiniestroComponent;
  let fixture: ComponentFixture<DeleteSiniestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSiniestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSiniestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
