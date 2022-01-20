import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-capital-input',
  templateUrl: './capital-input.component.html',
  styles: [
  ]
})
export class CapitalInputComponent implements OnInit {
  @Output() onEnter:EventEmitter<string>=new EventEmitter();
  @Output() onDebounce:EventEmitter<string>=new EventEmitter();

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
