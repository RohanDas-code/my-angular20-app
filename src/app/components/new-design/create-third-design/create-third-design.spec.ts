import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThirdDesign } from './create-third-design';

describe('CreateThirdDesign', () => {
  let component: CreateThirdDesign;
  let fixture: ComponentFixture<CreateThirdDesign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateThirdDesign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateThirdDesign);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
