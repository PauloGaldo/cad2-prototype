import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidenciaMedicaAcordeonesComponent } from './components/incidencia-medica-acordeones/incidencia-medica-acordeones.component';
import { IncidenciaMedicaComponent } from './components/incidencia-medica/incidencia-medica.component';

const routes: Routes = [
  { path: '', component: IncidenciaMedicaComponent },
  { path: 'acordeones', component: IncidenciaMedicaAcordeonesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
