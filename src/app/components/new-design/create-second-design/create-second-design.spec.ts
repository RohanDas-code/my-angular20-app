import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSecondDesign } from './create-second-design';

describe('CreateSecondDesign', () => {
  let component: CreateSecondDesign;
  let fixture: ComponentFixture<CreateSecondDesign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSecondDesign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSecondDesign);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
