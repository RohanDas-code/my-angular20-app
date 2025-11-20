import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chatboat } from './chatboat';

describe('Chatboat', () => {
  let component: Chatboat;
  let fixture: ComponentFixture<Chatboat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chatboat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chatboat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
