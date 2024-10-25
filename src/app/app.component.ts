import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiComponentComponent } from '../components/API-component/api-component/api-component.component';
import { EventComponentComponent } from '../components/Event-component/event-component/event-component.component';
import {CONSTANTS } from '@constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ApiComponentComponent, EventComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-jest-integration';

  constructor() {
  }

  ngOnInit() {
    this.title = CONSTANTS;
  }
}
