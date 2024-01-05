import { Component } from '@angular/core';
import { job } from '../../model/job';
import { JobsService } from '../../service/jobs.service';

@Component({
  selector: 'app-alljobs-parent',
  templateUrl: './alljobs-parent.component.html',
  styleUrls: ['./alljobs-parent.component.css']
})
export class AlljobsParentComponent {
  jobs: job[] = [];
  constructor(private jobService: JobsService) { }
  ngOnInit() {
    this.getJobs();


  }
  getJobs() {
    this.jobService.getJob().subscribe((response: job[]) => {

    
     this.jobs=response;
      console.log(this.jobs);

    });
  }

}
