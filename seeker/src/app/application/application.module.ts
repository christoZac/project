import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesRoutingModule } from './routes/routes-routing.module';
import { ApplicationParentComponent } from './components/application-parent/application-parent.component';



@NgModule({
  declarations: [
    ApplicationParentComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule
    
  ]
})
export class ApplicationModule { }
