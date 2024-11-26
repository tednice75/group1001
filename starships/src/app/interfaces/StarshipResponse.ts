export interface StarshipResponse {
  count: number;
  next: string;
  previous: string;
  results: Starship[];
}

export class Starship {
  MGLT = '';
  cargo_capacity = '';
  consumables = '';
  cost_in_credits = '';
  created = '';
  crew = '';
  edited = '';
  hyperdrive_rating = '';
  length = '';
  manufacturer = '';
  max_atmosphering_speed = '';
  model = '';
  name = '';
  passengers = '';
  films: string[] = [];
  pilots: string[] = [];
  starship_class = '';
  url = '';
}
