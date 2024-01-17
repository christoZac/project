import { Component } from '@angular/core';
import { job, savedjobs } from '../../model/job';
import { JobsService } from '../../service/jobs.service';

@Component({
  selector: 'app-saved-jobs',
  templateUrl: './saved-jobs.component.html',
  styleUrls: ['./saved-jobs.component.css']
})
export class SavedJobsComponent {
  jobTitle:any;
  saved: savedjobs[] = [];
  constructor(private jobService: JobsService) { }
  ngOnInit() {
    this.getSaveds(this.jobTitle);
  }
  getSaveds(jobTitle:any) {
    this.jobService.getSavedJob(jobTitle).subscribe((response:any) => {
     this.saved=response;
      console.log(this.saved);

    });
  }

}
