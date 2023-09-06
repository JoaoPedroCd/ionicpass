import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuitarraPage } from './guitarra.page';

describe('GuitarraPage', () => {
  let component: GuitarraPage;
  let fixture: ComponentFixture<GuitarraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuitarraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
