import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunnyFactsComponent } from './funny-facts.component';

describe('FunnyFactsComponent', () => {
  let component: FunnyFactsComponent;
  let fixture: ComponentFixture<FunnyFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunnyFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunnyFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
