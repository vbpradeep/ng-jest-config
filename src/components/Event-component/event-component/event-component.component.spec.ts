import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventComponentComponent } from './event-component.component';

describe('EventComponentComponent', () => {
  let component: EventComponentComponent;
  let fixture: ComponentFixture<EventComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.buttonText).toBe('Click!');
    JestHelper.exists("#btn");
    JestHelper.click('#btn');
    expect(component.buttonText).toBe('Clicked');
    JestHelper.click('#btn');
    expect(component.buttonText).toBe('Click!');
  });
});

