import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalTitleComponent } from './postal-title.component';

describe('PostalTitleComponent', () => {
  let component: PostalTitleComponent;
  let fixture: ComponentFixture<PostalTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostalTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostalTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
