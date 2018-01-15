import { ImageCustomViewComponent } from './components/image-custom-view/image-custom-view.component';
import { LocalPaginationConfig } from './../_shared/components/local-pagination/local-pagination-config';
import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserSessionService } from '../_shared/services/user-session/user-session.service';
import { User } from '../_shared/services/user-session/user.class';
import { Vehicle } from '../_shared/services/server-api/vehicles/vehicle.class';
import { VehiclesService } from '../_shared/services/server-api/vehicles/vehicles.service';
import { CurrencyViewComponent } from './components/currency-view/currency-view.component';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FleetComponent implements OnInit {
  @HostBinding('class.stage') stage = true;

  constructor(
    private userSessionService: UserSessionService,
    private vehiclesService: VehiclesService
  ) { }

  public vehicles: Vehicle[];
  public filterdVehicles: Vehicle[];

  public tableConfig: LocalPaginationConfig = {
    headers: ['Placa', 'Modelo', 'Marca', 'Foto', 'Combustível', 'Valor'],
    selectable: true,
    pageSize: 5,
    currentPage: 1,
    rulerSize: 5,
    customViews: {
      image: ImageCustomViewComponent,
      price: CurrencyViewComponent
    }
  };
  public searchBy = '';

  filterVehicles() {
    this.filterdVehicles = this.vehicles.filter(
      (vehicle: Vehicle) => {
        const foundInBrand = vehicle.brand.toLowerCase().includes(this.searchBy.toLowerCase());
        const foundInFuel = vehicle.fuel.toLowerCase().includes(this.searchBy.toLowerCase());
        const foundInModel = vehicle.model.toLowerCase().includes(this.searchBy.toLowerCase());
        const foundInPlate = vehicle.plate.toLowerCase().includes(this.searchBy.toLowerCase());
        return foundInBrand || foundInFuel || foundInModel || foundInPlate;
      }
    );
  }

  ngOnInit() {
    this.vehiclesService.fecth();
    this.vehiclesService.vehicles.subscribe((vehicles: Vehicle[]) => {
      // Ordering Obj from server
      const vArray: Vehicle[] = [];
      vehicles.forEach( (vehicle) => {
        vArray.push( new Vehicle(
          vehicle.plate,
          vehicle.brand,
          vehicle.model,
          vehicle.image,
          vehicle.fuel,
          vehicle.price
        ));
      });
      this.vehicles = vArray;
      this.filterVehicles();
    });
    this.userSessionService.login( new User('Anônimo'));
  }

}
