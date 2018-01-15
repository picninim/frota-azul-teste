import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';

import { Vehicle } from './vehicle.class';
import { SERVER_PATHS } from './../../../../../config/paths';


@Injectable()
export class VehiclesService {

  public vehicles: Observable<Vehicle[]>;

  constructor(
    private db: AngularFireDatabase
  ) {
  }
  // getAll(): Vehicle[] {
  //   // return this.vehicles.map;
  // }
  fecth(): Observable<Vehicle[]> {
    this.vehicles = this.db.list(SERVER_PATHS.VEHICLES).valueChanges() as Observable<Vehicle[]>;
    return this.vehicles;
  }
}
