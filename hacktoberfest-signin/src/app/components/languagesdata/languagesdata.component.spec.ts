import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesdataComponent } from './languagesdata.component';

describe('LanguagesdataComponent', () => {
  let component: LanguagesdataComponent;
  let fixture: ComponentFixture<LanguagesdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
