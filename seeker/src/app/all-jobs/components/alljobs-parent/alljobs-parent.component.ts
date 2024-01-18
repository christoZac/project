import { Component } from '@angular/core';
import { applyJob, job, savedjobs } from '../../model/job';
import { JobsService } from '../../service/jobs.service';
import { saved } from '../../model/save';

@Component({
  selector: 'app-alljobs-parent',
  templateUrl: './alljobs-parent.component.html',
  styleUrls: ['./alljobs-parent.component.css']
})
export class AlljobsParentComponent {
  jobs: job[] = [];
  save: savedjobs[] = [];
  apply:applyJob[]=[];
  constructor(private jobService: JobsService) { }
  ngOnInit() {
    this.getJobs();


  }
  getJobs() {
    this.jobService.getJob().subscribe((response: job[]) => {

    console.log(response)
     this.jobs=response ;
      console.log(this.jobs);

    });
  }


  saveJob(data:any){
    
  
    this.jobService.postSaved(data,data).subscribe((response:any ) => { 
       this.save=response;
       console.log(this.save)
 
     });
    


  }
 
}
