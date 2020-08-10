import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador')
      .subscribe(contador => {
        this.contador = contador;
      });
  }

  multiplicar() {
    const accion = new MultiplicarAction(5);
    this.store.dispatch(accion);
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
  }

  dividir() {
    const accion = new DividirAction(2);
    this.store.dispatch(accion);
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
  }

  resetNieto(numero) {
    this.contador = 0;
    // this.cambioContador.emit(this.contador);
  }

}
