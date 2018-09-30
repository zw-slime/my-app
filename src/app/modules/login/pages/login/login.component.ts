import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { State } from "./ngrx/reducer";
import { selectValues } from "./ngrx/selectors";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  validateForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<State>) {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
    store.pipe(select(selectValues)).subscribe(v => {
      this.validateForm.patchValue(v);
    });
  }

  ngOnInit() {}

  ngOnDestroy() {}

  submitForm(): void {
    for (const i of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
}
