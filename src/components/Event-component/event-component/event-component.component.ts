import { Component } from '@angular/core';

@Component({
  selector: 'app-event-component',
  standalone: true,
  imports: [],
  templateUrl: './event-component.component.html',
  styleUrl: './event-component.component.scss'
})
export class EventComponentComponent {

  buttonText = "Click!"
  test = 'hi'

  onClick(args: MouseEvent) {
    let currentText = this.buttonText;
    if (args && args.target) {
        currentText = (args.target as HTMLElement).innerText;
    }
    if (currentText === 'Clicked') {
      this.buttonText = "Click!";
    } else {
      this.buttonText = "Clicked";
    }
   
    if (this.test === 'hi')
     this.hiFun()
  }


  hiFun() {
    if (this.test === 'hi') {
      //
    } else {
      //
    }
  }
}
