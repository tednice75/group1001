import { Component } from '@angular/core';
import {EllipsisPipe} from "../../pipes/ellipsis.pipe";
import {MatAnchor} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {RouterLink} from "@angular/router";
import {starship} from "../../interfaces/StarshipResponse";
import {GetShipsService} from "../../services/api/getships.service";

@Component({
  selector: 'app-all-star-ships',
  standalone: true,
    imports: [
        EllipsisPipe,
        MatAnchor,
        MatCard,
        MatCardActions,
        MatCardHeader,
        MatCardSubtitle,
        MatCardTitle,
        MatFormField,
        MatLabel,
        MatOption,
        MatSelect,
        RouterLink
    ],
  templateUrl: './all-star-ships.component.html',
  styleUrl: './all-star-ships.component.scss'
})
export class AllStarShipsComponent {
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
