import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starship',
  standalone: true,
  imports: [],
  templateUrl: './starship.component.html',
  styleUrl: './starship.component.scss',
  providers: [ActivatedRoute]
})
export class StarshipComponent {

  constructor(private route: ActivatedRoute) {

  }

}
