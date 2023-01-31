import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextReferenceComponent } from './text-reference.component';

describe('TextReferenceComponent', () => {
  let component: TextReferenceComponent;
  let fixture: ComponentFixture<TextReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextReferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
