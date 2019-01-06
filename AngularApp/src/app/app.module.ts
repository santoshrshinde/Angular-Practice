import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoopComponent } from './loop/loop.component';
import { FormsModule } from '@angular/forms';
import { WebsocketComponent } from './websocket/websocket.component';
import { ParentComponent } from './inputoutput/parent/parent.component';
import { ChildComponent } from './inputoutput/child/child.component';
import { FilterComponent } from './filter/filter.component';
import { LocationInitialsPipe } from './filter/pipes/location.initials.pipe';
import { LocationPipe } from './filter/pipes/location.pipe';
import { FunctionAreaPipe } from './filter/pipes/function.area.pipe';
// import {FilterPipe} from './filters/namesFilter';


const appRoutes: Routes = [
  { path: 'forloop', component: LoopComponent, pathMatch: 'full' },
  { path: 'websocket', component: WebsocketComponent, pathMatch: 'full' },
  { path: 'parentcomponent', component: ParentComponent, pathMatch: 'full' },
  { path: 'childcomponent', component: ChildComponent, pathMatch: 'full' },
  { path: 'filtercomponent', component: FilterComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
@NgModule({
  declarations: [
    AppComponent,
    LoopComponent,
    WebsocketComponent,
    ParentComponent,
    ChildComponent,
    FilterComponent,
    // filters,
    LocationInitialsPipe,
    LocationPipe,
    FunctionAreaPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {
          enableTracing: false    // <-- for debugging set to true
      }
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

