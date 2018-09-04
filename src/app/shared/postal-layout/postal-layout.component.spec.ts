import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalLayoutComponent } from './postal-layout.component';

describe('PostalLayoutComponent', () => {
  let component: PostalLayoutComponent;
  let fixture: ComponentFixture<PostalLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostalLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
