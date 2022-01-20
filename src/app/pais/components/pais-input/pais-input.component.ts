import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',

})
export class PaisInputComponent implements OnInit {

@Output() onEnter:EventEmitter<string>=new EventEmitter();
@Output() onDebounce:EventEmitter<string>=new EventEmitter();
@Input()placeholder:string='';
dbouncer:Subject<string> =new Subject();

termino:string='';

ngOnInit() {
  this.dbouncer
  .pipe(
    debounceTime(333))
  .subscribe(valor=>{
    this.onDebounce.emit(valor);
  })
}

buscar(){
  this.onEnter.emit(this.termino)

}
teclaPresionada(event:any){
this.dbouncer.next(this.termino);

}

}
