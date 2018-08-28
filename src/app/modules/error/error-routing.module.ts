import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotfoundComponent } from "./pages/notfound/notfound.component";

const routes: Routes = [
  {
    path: "",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule {}