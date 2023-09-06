import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaixoPage } from './baixo.page';

describe('BaixoPage', () => {
  let component: BaixoPage;
  let fixture: ComponentFixture<BaixoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BaixoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
