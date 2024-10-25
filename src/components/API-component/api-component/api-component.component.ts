import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';

interface APIResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-api-component',
  standalone: true,
  imports: [],
  templateUrl: './api-component.component.html',
  styleUrl: './api-component.component.scss',
  providers: [ApiService]
})
export class ApiComponentComponent {
  datas: APIResponse[] = [];

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData().subscribe((data) => {
      this.datas = data;
    });
  }
}
