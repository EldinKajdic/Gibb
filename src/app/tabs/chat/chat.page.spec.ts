import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { chatPage } from './chat.page';

describe('chatPage', () => {
  let component: chatPage;
  let fixture: ComponentFixture<chatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [chatPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(chatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
