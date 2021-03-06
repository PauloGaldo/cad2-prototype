import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescripcionIncidenteComponent } from './components/descripcion-incidente/descripcion-incidente.component';
import { DireccionIncidenteComponent } from './components/direccion-incidente/direccion-incidente.component';
import { IncidenciaMedicaComponent } from './components/incidencia-medica/incidencia-medica.component';
import { OrigenLlamadaComponent } from './components/origen-llamada/origen-llamada.component';
import { MaterialModule } from './shared/material.module';
import { IncidenciaMedicaAcordeonesComponent } from './components/incidencia-medica-acordeones/incidencia-medica-acordeones.component';


@NgModule({
  declarations: [
    AppComponent,
    IncidenciaMedicaComponent,
    OrigenLlamadaComponent,
    DireccionIncidenteComponent,
    DescripcionIncidenteComponent,
    IncidenciaMedicaAcordeonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
