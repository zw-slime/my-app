import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", loadChildren: "./modules/login/login.module#LoginModule" },
  { path: "user", loadChildren: "./modules/user/user.module#UserModule" },
  { path: "error", loadChildren: "./modules/error/error.module#ErrorModule" },
  { path: "**", loadChildren: "./modules/error/error.module#ErrorModule" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
