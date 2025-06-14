import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftViewComponent } from './draftView.component';

describe('DraftComponent', () => {
  let component: DraftViewComponent;
  let fixture: ComponentFixture<DraftViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
