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


<<<<<<< HEAD
  saveJob(id: string) {
    this.jobService.postSaved(id).subscribe(
      (response: any) => {
        this.save = response;
        console.log(this.save);
      },
      (error) => {
        console.error(error);
  
        if (error.status === 200 && error.statusText === 'OK') {
          
          console.log('Job saved successfully');
        
        } else {
         
        }
      }
    );
  }
  
  
 
  // applyJob(data:any){
  //   this.jobService.postJobapplication(data).subscribe((response:any)=>{
  //     this.apply=response
  //     console.log(this.apply)

  //   });
  // }
=======
  saveJob(data:any){
    
  
    this.jobService.postSaved(data,data).subscribe((response ) => { 
       this.save=response;
       console.log(this.save)
 
     });
    


  }
 
>>>>>>> e8c9fc1d30d2a137215f5baabd1e66513c3b779c
}
