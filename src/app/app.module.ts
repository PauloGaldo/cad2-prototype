import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResizableModule } from 'angular-resizable-element';
import { DragulaModule } from 'ng2-dragula';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoorporacionesComponent } from './components/coorporaciones/coorporaciones.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { DescripcionIncidenteComponent } from './components/descripcion-incidente/descripcion-incidente.component';
import { DireccionIncidenteComponent } from './components/direccion-incidente/direccion-incidente.component';
import { IncidenciaMedicaAcordeonesComponent } from './components/incidencia-medica-acordeones/incidencia-medica-acordeones.component';
import { IncidenciaMedicaComponent } from './components/incidencia-medica/incidencia-medica.component';
import { IncidenciaNoMedicaAcordeonesComponent } from './components/incidencia-no-medica-acordeones/incidencia-no-medica-acordeones.component';
import { InvolucradosComponent } from './components/involucrados/involucrados.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NotasIncidenteComponent } from './components/notas-incidente/notas-incidente.component';
import { OrigenLlamadaComponent } from './components/origen-llamada/origen-llamada.component';
import { ProtocoloComponent } from './components/protocolo/protocolo.component';
import { TablaInvolucradosComponent } from './components/tabla-involucrados/tabla-involucrados.component';
import { TipoIncidenteComponent } from './components/tipo-incidente/tipo-incidente.component';
import { MaterialModule } from './shared/material.module';
import { ResizeCollapseDragableComponent } from './shared/resize-collapse-dragable/resize-collapse-dragable.component';

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
        ProtocoloComponent,
        IncidenciaNoMedicaAcordeonesComponent,
        ResizeCollapseDragableComponent,
        LayoutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        DragulaModule,
        ResizableModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
