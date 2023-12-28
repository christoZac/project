import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router:Router){}

  navigateToDashboard(){
    this.router.navigate(['home/dashboard']);
  }
  navigateToApplication(){
    this.router.navigate(['home/application']);
  }
  navigateToMessages(){
    this.router.navigate(['home/messages']);
  }
  navigateToprofile(){
    this.router.navigate(['home/profile']);
  }
  navigateToSettings(){
    this.router.navigate(['home/settings']);
  }


}
