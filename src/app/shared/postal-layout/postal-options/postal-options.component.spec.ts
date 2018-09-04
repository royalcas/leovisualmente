import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalOptionsComponent } from './postal-options.component';

describe('PostalOptionsComponent', () => {
  let component: PostalOptionsComponent;
  let fixture: ComponentFixture<PostalOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostalOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostalOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
