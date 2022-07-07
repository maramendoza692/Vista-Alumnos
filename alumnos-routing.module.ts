import { Page404Component } from "../authentication/page404/page404.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlumnoComponent } from "./perfil/perfil.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: AlumnoComponent,
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoRoutingModule {}
