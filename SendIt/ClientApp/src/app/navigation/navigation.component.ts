import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{  
  constructor() {        
  }
  ngOnInit(): void {    
  }
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
