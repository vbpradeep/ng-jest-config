import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolver-component',
  standalone: true,
  imports: [],
  templateUrl: './resolver-component.component.html',
  styleUrl: './resolver-component.component.scss'
})
export class ResolverComponentComponent {

  datas = [];
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
    this.datas = data['data']; 
  });
  }

}
