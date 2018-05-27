import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListResolver } from './team-list.resolver';
import { TeamListComponent } from './team-list/team-list.component';

const routes: Routes = [
  {path: 'teams', component: TeamListComponent, resolve: {teams: TeamListResolver}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
