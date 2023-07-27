import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-for-start',
  templateUrl: './for-start.component.html',
  styleUrls: ['./for-start.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [ 
        animate(1000)
      ]),
    ])

  ]
})
export class ForStartComponent {

}
