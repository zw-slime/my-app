import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { StoreModule } from "@ngrx/store";

import { AppRoutingModule } from "./app-routing.module";
import { metaReducers, reducers } from "./app-reducer";

import { AppComponent } from "./bootstrap/app.component";

import { NgZorroAntdModule, NZ_I18N, zh_CN } from "ng-zorro-antd";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  RouterStateSerializer,
  StoreRouterConnectingModule
} from "@ngrx/router-store";
import { CustomSerializer } from "./router-ngrx";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    AppRoutingModule,
    NgZorroAntdModule,
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      logOnly: environment.production
    })
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
