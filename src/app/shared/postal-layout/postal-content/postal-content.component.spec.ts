import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalContentComponent } from './postal-content.component';

describe('PostalContentComponent', () => {
  let component: PostalContentComponent;
  let fixture: ComponentFixture<PostalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
