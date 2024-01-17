import { Component } from '@angular/core';
import { applies } from '../../model/application';
import { ApplicationService } from '../../service/application.service';

@Component({
  selector: 'app-application-parent',
  templateUrl: './application-parent.component.html',
  styleUrls: ['./application-parent.component.css']
})
export class ApplicationParentComponent {
  application:applies[]=[]
  
  constructor( private ps: ApplicationService) {}

  ngOnInit() {
    const jobTitle = 'angular'; 
    this.getapplications(jobTitle);
   

  }
  
  getapplications(jobTitle: string): void {
    this.ps.getapplicant(jobTitle).subscribe((response: applies[]) => {
      this.application = response;
      console.log(this.application);
    });
  }


}
