import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshiplistComponent } from './spaceshiplist.component';

describe('SpaceshiplistComponent', () => {
  let component: SpaceshiplistComponent;
  let fixture: ComponentFixture<SpaceshiplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshiplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshiplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
