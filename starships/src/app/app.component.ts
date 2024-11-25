import { Component } from '@angular/core';
import {DatePipe, NgFor} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GetShipsService } from './services/api/getships.service';
import {} from "@angular/common/http";
import {starship} from "./interfaces/StarshipResponse";
import { MatExpansionModule } from '@angular/material/expansion'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule, NgFor, MatExpansionModule, DatePipe, MatButtonToggleModule, MatButtonModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [GetShipsService]
})
export class AppComponent {

  allShips: starship[] = [];
  manufacturers: string[] = [];

  constructor(private ship: GetShipsService) {
      this.ship.allStarShips.subscribe(e =>
      {

        this.allShips = e
        console.log('All >>>>> ', this.allShips)
        this.setManufacturers(e)
      })

  }

  setManufacturers(arr: any[]){
    let results: string[] = []
    arr.forEach((e) => {
      results.push(e.manufacturer)
    })

    this.manufacturers = Array.from(new Set(...results));


  }

}


