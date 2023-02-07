import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifBoxComponent } from './gif-box.component';

describe('GifBoxComponent', () => {
  let component: GifBoxComponent;
  let fixture: ComponentFixture<GifBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
