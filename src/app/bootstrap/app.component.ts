import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";

interface IAppState {
  count: number;
}

@Component({
  selector: "app-root",
  template: "<router-outlet></router-outlet>"
  // templateUrl: "./app.component.html",
  // styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // count$: Observable<number>;
  // constructor(private store: Store<IAppState>) {
  //   this.count$ = store.pipe(select("count"));
  // }
  // increment() {
  //   this.store.dispatch({ type: INCREMENT });
  // }
  // decrement() {
  //   this.store.dispatch({ type: DECREMENT });
  // }
  // reset() {
  //   this.store.dispatch({ type: RESET });
  // }
}
