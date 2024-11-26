import { Component } from '@angular/core';
import {EllipsisPipe} from "../../pipes/ellipsis.pipe";
import {MatAnchor} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {RouterLink, ActivatedRoute} from "@angular/router";
import {Starship} from "../../interfaces/StarshipResponse";
import {GetShipsService} from "../../services/api/getships.service";
import { FormControl, ReactiveFormsModule } from '@angular/forms';

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
        RouterLink,
        ReactiveFormsModule
    ],
  templateUrl: './all-star-ships.component.html',
  styleUrl: './all-star-ships.component.scss'
})

export class AllStarShipsComponent {
  allShips: Starship[] = [];
  displayShips: Starship[] = [];
  manufacturers: string[] = [];
  shipControl = new FormControl()

  constructor(private ship: GetShipsService) {
    this.ship.allStarShips.subscribe(e =>
    {
      this.allShips = e
      this.displayShips = this.allShips
      this.setManufacturers(e)
    })
  this.shipControl.valueChanges.subscribe(e => 
    {
      if(e === "Show All") {
        this.displayShips = this.allShips
      } else {
        this.displayShips = this.allShips.filter(j => j.manufacturer === e)
      }
    })
  }
  
  setManufacturers(arr: any[]){
    let results: any[] = ["Show All"]
    arr.forEach((e) => {
      results.push(e.manufacturer)
    })
    let a = new Set(results)
    this.manufacturers = [...a];
  }
}
