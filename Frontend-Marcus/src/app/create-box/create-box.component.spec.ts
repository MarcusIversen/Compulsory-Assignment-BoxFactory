import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBoxComponent } from './create-box.component';

describe('CreateBoxComponent', () => {
  let component: CreateBoxComponent;
  let fixture: ComponentFixture<CreateBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
