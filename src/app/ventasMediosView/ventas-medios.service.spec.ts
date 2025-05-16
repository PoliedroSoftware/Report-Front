import { TestBed } from '@angular/core/testing';

import { VentasMediosService } from './ventas-medios.service';

describe('VentasMediosService', () => {
  let service: VentasMediosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentasMediosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
