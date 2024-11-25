export interface starshipResponse {
  count: number;
  next: string;
  previous: string;
  results: starship[];
}

export interface starship {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[];
  pilots: any[];
  starship_class: string;
  url: string;
}
