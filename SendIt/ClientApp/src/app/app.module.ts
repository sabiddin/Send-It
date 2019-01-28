import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./material/material.module";
//import {MatButtonModule, MatMenuModule,MatCheckboxModule, MatIconModule, MatToolbarModule} from '@angular/material';
//import {MatStepperModule} from '@angular/material/stepper';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { SavedRequestComponent } from './saved-request/saved-request.component';
import { SubmittedRequestsComponent } from './submitted-requests/submitted-requests.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NewRequestComponent,
    SavedRequestComponent,
    SubmittedRequestsComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
