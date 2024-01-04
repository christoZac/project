import { Component } from '@angular/core';
import { job } from '../../model/job';
import { JobsService } from '../../service/jobs.service';

@Component({
  selector: 'app-saved-jobs',
  templateUrl: './saved-jobs.component.html',
  styleUrls: ['./saved-jobs.component.css']
})
export class SavedJobsComponent {
  jobs: job[] = [];
  constructor(private jobService: JobsService) { }
  ngOnInit() {
    this.getSaveds();


  }
  getSaveds() {
    this.jobService.getsaved().subscribe((response: job[]) => {

    
     this.jobs=response;
      console.log(this.jobs);

    });
  }

}
