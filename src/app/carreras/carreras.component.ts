import { Component, OnInit } from '@angular/core';
import {CarreerasService} from '../servicios/carreeras.service'
@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.scss']
})
export class CarrerasComponent implements OnInit {
  carreras:any[]=[];
  constructor(private _carrerasService:CarreerasService) { }

  ngOnInit(): void {
    this.carreras=this._carrerasService.getCarreras();
    console.log(this.carreras);
  }

}
