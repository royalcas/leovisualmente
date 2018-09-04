import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalTitleNoteComponent } from './postal-title-note.component';

describe('PostalTitleNoteComponent', () => {
  let component: PostalTitleNoteComponent;
  let fixture: ComponentFixture<PostalTitleNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostalTitleNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostalTitleNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
