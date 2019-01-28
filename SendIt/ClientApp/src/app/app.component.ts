import { Component } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientApp';
  links: routeLink[] =[
    { link: '/home', text: 'Home'} ,
   { link: '/newrequest', text: 'New Request'} ,
   { link: '/savedrequest', text: 'Saved Request'} ,
   { link:'/submittedrequest', text:'Submitted Request'}
  ]; 
}
export interface routeLink{
  text: string;
  link: string;
}
