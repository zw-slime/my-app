import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./pages/login/login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./login.reducer";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature("login", reducers)
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}
