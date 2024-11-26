import { Component } from '@angular/core';
import { DatePipe } from '@angular/common'; 
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GetShipsService } from '../../services/api/getships.service'
import { Starship } from '../../interfaces/StarshipResponse'


@Component({
  selector: 'app-starship',
  standalone: true,
  imports: [RouterModule, DatePipe],
  templateUrl: './starship.component.html',
  styleUrl: './starship.component.scss',
  providers: []
})
export class StarshipComponent {

  public item = new Starship()

  constructor(private route: ActivatedRoute, private myShips: GetShipsService) {
    this.myShips.allStarShips.subscribe(e => {
      this.item = e[this.route.snapshot.params['id']]
    })
  }

}