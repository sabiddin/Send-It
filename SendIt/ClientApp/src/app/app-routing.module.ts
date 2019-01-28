import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from "./button/button.component";
import { NewRequestComponent } from './new-request/new-request.component';
import { SavedRequestComponent } from './saved-request/saved-request.component';
import { SubmittedRequestsComponent } from './submitted-requests/submitted-requests.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'button',component:ButtonComponent},
{path:'newrequest',component: NewRequestComponent},
{path:'savedrequest', component:SavedRequestComponent},
{path:'submittedrequest', component:SubmittedRequestsComponent},
{path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
