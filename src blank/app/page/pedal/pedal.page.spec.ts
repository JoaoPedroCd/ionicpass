import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedalPage } from './pedal.page';

describe('PedalPage', () => {
  let component: PedalPage;
  let fixture: ComponentFixture<PedalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PedalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
