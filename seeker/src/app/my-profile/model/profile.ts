export class profile{
    jobSeekerId:any | undefined;
    profileName!:string;
    profileSummary!:string;
}

export class getProfile{
    id!:string;
    resumeId!:string;
    jobSeekerId!:string;
    profileName!:string;
    profileSummary!:string;
    jobSeeker!:string;
}

export class Skill{
    id:string | undefined;
    name!:string;
    description!:string;

}
