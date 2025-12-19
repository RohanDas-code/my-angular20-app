import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewDesign } from './create-new-design';

describe('CreateNewDesign', () => {
  let component: CreateNewDesign;
  let fixture: ComponentFixture<CreateNewDesign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewDesign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewDesign);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
