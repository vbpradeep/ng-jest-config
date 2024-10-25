import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiComponentComponent } from './api-component.component';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { ApiService } from '../../../services/api.service';
import { of } from 'rxjs';

const mockData = [
  {
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    userId: 1,
  },
];

describe('ApiComponentComponent', () => {
  let component: ApiComponentComponent;
  let fixture: ComponentFixture<ApiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiComponentComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), ApiService],
    }).compileComponents();
    TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    fixture = TestBed.createComponent(ApiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('API Data Testing with SpyOn', () => {
    fixture = TestBed.createComponent(ApiComponentComponent);
    const service = fixture.debugElement.injector.get(ApiService);
    component = fixture.componentInstance;
    const mockFn = JestHelper.spyOnFunction(service, 'getData');
    fixture.detectChanges();
    JestHelper.expectCalled(mockFn);
    expect(component).toBeTruthy();
  });

  // it.skip('API Data Testing with SpyOn', () => {
  //   fixture = TestBed.createComponent(ApiComponentComponent);
  //   const service = fixture.debugElement.injector.get(ApiService);
  //   component = fixture.componentInstance;
  //   const mockFn = null; // = jest.spyOn(service, 'getData');
  //   fixture.detectChanges();
  //   expect(mockFn).toHaveBeenCalled();
  //   expect(component).toBeTruthy();
  // });

  it('API Data Testing with Mocked Data', () => {
    fixture = TestBed.createComponent(ApiComponentComponent);
    const service = fixture.debugElement.injector.get(ApiService);
    component = fixture.componentInstance;
    const mockFn = jest.spyOn(service, 'getData').mockReturnValue(of(mockData));
    fixture.detectChanges();
    JestHelper.expectCalled(mockFn);
    expect(component.datas[0].title).toBe(
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
    );
    JestHelper.expectCalledTimes(mockFn, 1);
  });

  it('API Data Testing with Mocked Data', () => {
    fixture = TestBed.createComponent(ApiComponentComponent);
    const mockService = { getData: jest.fn(() => of(mockData)) };
    component.apiService = mockService as any;
    component.ngOnInit();
    JestHelper.expectCalled(mockService.getData);
    expect(component.datas[0].title).toBe(
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
    );
    JestHelper.expectCalledTimes(mockService.getData, 1);
    expect(component).toBeTruthy();
  });

  afterAll(() => {
    JestHelper.resetMocks();
  });
});
