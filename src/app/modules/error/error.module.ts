import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ErrorRoutingModule } from "./error-routing.module";
import { NotfoundComponent } from "./pages/notfound/notfound.component";

@NgModule({
  imports: [CommonModule, ErrorRoutingModule],
  declarations: [NotfoundComponent]
})
export class ErrorModule {}
