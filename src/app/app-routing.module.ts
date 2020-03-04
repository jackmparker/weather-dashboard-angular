import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageLocationsComponent } from './components/manage-locations/manage-locations.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'manage-locations', component: ManageLocationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
