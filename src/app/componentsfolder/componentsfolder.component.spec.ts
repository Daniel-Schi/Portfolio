import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsfolderComponent } from './componentsfolder.component';

describe('ComponentsfolderComponent', () => {
  let component: ComponentsfolderComponent;
  let fixture: ComponentFixture<ComponentsfolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsfolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsfolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
