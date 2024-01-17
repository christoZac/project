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
<<<<<<< HEAD
    id!:string;
=======
    id:string | undefined
>>>>>>> 883c4a1cfe08d57b571e095d5427457db682fcf0
    name!:string;
    description!:string;


}








export class Experience{
    
    jobTitle: string="";
    companyName:string="";
    summary: string="";
    serviceStart: any;
    serviceEnd:any ;
}

// export class Experiences{
//   jobSeekerProfileId:string="";
//   jobTitle:string="";
//   companyName:string="";
//   summary:string="";
//   serviceStart:string="";
//   serviceEnd:string="";
// }
export class resume{
id: string="";
    title: string="";
    file: string="";
    }

export class qualifications{
    name: string="";
  description:string="";
}