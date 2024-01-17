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
    id!:string;
    name!:string;
    description!:string;

}

export class Experience{
  jobTitle: string | undefined;
  companyName: string | undefined;
  summary: string | undefined;
  serviceStart: string | undefined;
  serviceEnd: string | undefined;
}
// export class AddSkill{

// // }
