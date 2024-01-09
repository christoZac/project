export class profile{
   
    jobSeekerId:any | undefined;
    profileName!:string;
    profileSummary!:string;
}

export class getProfile{
    id:string=""
    resumeId:string="";
    jobSeekerId:string="";
    profileName:string="";
    profileSummary:string="";
    jobSeeker:string="";
}

export class Skill{
    id:string='';
    name!:string;
    description!:string;

}

export class Experience{
    jobSeekerProfileId:string="";
    jobTitle: string="";
    companyName:string="";
    summary: string="";
    serviceStart: string="";
}
export class Experiences{
jobTitle: string="";
  companyName: string="";
  summary: string="";
  serviceStart:string="";
  serviceEnd: string="";
}
export class resume{
    id: string="";
    title: string="";
    file: string="";
    }