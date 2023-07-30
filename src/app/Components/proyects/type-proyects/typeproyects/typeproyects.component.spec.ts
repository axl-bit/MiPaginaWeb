import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeproyectsComponent } from './typeproyects.component';

describe('TypeproyectsComponent', () => {
  let component: TypeproyectsComponent;
  let fixture: ComponentFixture<TypeproyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeproyectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeproyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
