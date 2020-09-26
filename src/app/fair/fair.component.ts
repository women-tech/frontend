import { Component, OnInit } from '@angular/core';
import {PonentesService} from '../servicios/ponentes.service'

@Component({
  selector: 'app-fair',
  templateUrl: './fair.component.html',
  styleUrls: ['./fair.component.scss']
})
export class FairComponent implements OnInit {
  ponentes:any[]=[];
  constructor(private _ponentesService:PonentesService) {

   }

  ngOnInit(): void {
    this.ponentes=this._ponentesService.getPonentes();
    console.log(this.ponentes);
  }

}
