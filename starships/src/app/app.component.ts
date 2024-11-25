import { Component } from '@angular/core';
import {DatePipe, NgFor} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import { GetShipsService } from './services/api/getships.service';
import {starship} from "./interfaces/StarshipResponse";
import { MatExpansionModule } from '@angular/material/expansion'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {EllipsisPipe} from "./pipes/ellipsis.pipe";
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    MatExpansionModule,
    DatePipe,
    MatButtonToggleModule,
    MatButtonModule,
    MatCardModule,
    EllipsisPipe,
    MatFormField,
    MatSelect,
    MatOption,
    MatInputModule,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [GetShipsService, EllipsisPipe]
})
export class AppComponent {

  allShips: starship[] = [];
  manufacturers: string[] = [];

  constructor(private ship: GetShipsService) {
      this.ship.allStarShips.subscribe(e =>
      {
        this.allShips = e
        this.setManufacturers(e)
      })

  }

  setManufacturers(arr: any[]){
    let results: any[] = []
    arr.forEach((e) => {
      results.push(e.manufacturer)
    })
    let a = new Set(results)
    let b = [...a]
    this.manufacturers = b;
    console.log(this.allShips.filter(e => e === b[1]))
  }

}


