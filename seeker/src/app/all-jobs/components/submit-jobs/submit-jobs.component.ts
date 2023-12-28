import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-jobs',
  templateUrl: './submit-jobs.component.html',
  styleUrls: ['./submit-jobs.component.css']
})
export class SubmitJobsComponent {
  constructor(private router:Router){}

  navigateToApplication(){
    this.router.navigate(['home/application']);
  }

}
