import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThirdDesignComponent } from './create-third-design';

describe('CreateThirdDesign', () => {
  let component: CreateThirdDesignComponent;
  let fixture: ComponentFixture<CreateThirdDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateThirdDesignComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateThirdDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
