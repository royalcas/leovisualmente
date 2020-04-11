import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalIntroductionComponent } from './personal-introduction.component';

describe('PersonalIntroductionComponent', () => {
  let component: PersonalIntroductionComponent;
  let fixture: ComponentFixture<PersonalIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
