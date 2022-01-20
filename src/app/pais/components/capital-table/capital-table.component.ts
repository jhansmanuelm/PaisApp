import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital-table',
  templateUrl: './capital-table.component.html',
  styles: [
  ]
})
export class CapitalTableComponent   {

  @Input() capital:Country[]=[];

  constructor(private paisService:PaisService) { }

}
