import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './simple.reducer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message$: Observable<string>;
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('messageStore', 'message');
    this.count$ = this.store.select('messageStore', 'count');
  }

  spanishMessage () {
    this.store.dispatch({type: 'SPANISH'});
  }

  japaneseMessage () {
    this.store.dispatch({type: 'JAPANESE'});
  }

  increment() {
    this.store.dispatch({type: 'INCREMENT'});
  }

  decrement() {
    this.store.dispatch({type: 'DECREMENT'});
  }

}
