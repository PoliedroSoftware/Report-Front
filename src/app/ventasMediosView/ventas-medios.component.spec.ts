import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasMediosComponent } from './ventas-medios.component';

describe('VentasMediosComponent', () => {
  let component: VentasMediosComponent;
  let fixture: ComponentFixture<VentasMediosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasMediosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasMediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

