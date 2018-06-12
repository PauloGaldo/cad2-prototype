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
import { TipoIncidenteComponent } from './components/tipo-incidente/tipo-incidente.component';
import { NotasIncidenteComponent } from './components/notas-incidente/notas-incidente.component';
import { CoorporacionesComponent } from './components/coorporaciones/coorporaciones.component';
import { InvolucradosComponent } from './components/involucrados/involucrados.component';
import { TablaInvolucradosComponent } from './components/tabla-involucrados/tabla-involucrados.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { ProtocoloComponent } from './components/protocolo/protocolo.component';


@NgModule({
  declarations: [
    AppComponent,
    IncidenciaMedicaComponent,
    OrigenLlamadaComponent,
    DireccionIncidenteComponent,
    DescripcionIncidenteComponent,
    IncidenciaMedicaAcordeonesComponent,
    TipoIncidenteComponent,
    NotasIncidenteComponent,
    CoorporacionesComponent,
    InvolucradosComponent,
    TablaInvolucradosComponent,
    CuestionarioComponent,
    ProtocoloComponent
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
