// user-resolver.service.ts
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class APIResolver implements Resolve<Observable<any>> {
  constructor(private apiService: ApiService) {}

  resolve(): Observable<any> {
    return this.apiService.getData();
  }
}
