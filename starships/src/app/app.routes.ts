import { Routes } from '@angular/router';
import { StarshipComponent } from './components/starship/starship.component';
import { AllStarShipsComponent } from './components/all-star-ships/all-star-ships.component';

export const routes: Routes = [
  { path: '', component: AllStarShipsComponent },
  { path: 'starship/:id', component: StarshipComponent }
];
