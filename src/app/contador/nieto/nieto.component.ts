import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador')
      .subscribe(contador => {
        this.contador = contador;
      });
  }

  ngOnInit(): void {
  }

  reset() {
    const accion = new ResetAction();
    this.store.dispatch(accion);
    // this.contador = 0;
    // this.cambioContador.emit(this.contador);
  }

}
