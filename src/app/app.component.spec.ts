import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ provideHttpClient(),
        provideHttpClientTesting(),]
    }).compileComponents();
    TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ng-jest-integration'`, () => {
    expect(component.title).toEqual('ng-jest-integration');
  });

  it(`should have as title 'ng-jest-integration'`, () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
