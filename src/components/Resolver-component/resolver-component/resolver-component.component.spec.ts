import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverComponentComponent } from './resolver-component.component';
import { ActivatedRoute } from '@angular/router';
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

describe('ResolverComponentComponent', () => {
  let component: ResolverComponentComponent;
  let fixture: ComponentFixture<ResolverComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResolverComponentComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
              data: of({data: mockData}), // Mocking the resolver data
              paramMap: of({ get: (key: string) => '1' }),
              queryParamMap: of({ get: (key: string) => key === 'sort' ? 'asc' : null }) 
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolverComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    expect(component.datas.length).toBe(1);
  });
});
