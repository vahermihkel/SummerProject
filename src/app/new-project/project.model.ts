export class Project {
    public contactName: string;
    public contactPhone: string;
    public contactEmail: string;
    public name: string;
    public description: string;
    public additional: string;
    public support: string;
    public insertedDate: Date;
    public deleted: boolean;
    public visible: boolean;
    public comments: string[];
    public students: {name: string, suund:string}[];
    public github: string;
    public blog: string;
    public url: string;
    public overviewer: string;
    public year: string;
    public firebaseId?: string;

    constructor(
        contactName: string, 
        contactPhone: string, 
        contactEmail: string,
        name: string,
        description: string,
        additional: string,
        support: string){
            this.insertedDate = new Date();
            this.contactName = contactName;
            this.contactPhone = contactPhone;
            this.contactEmail = contactEmail;
            this.name = name;
            this.description = description;
            this.additional = additional;
            this.support = support;
            this.deleted = false;
            this.visible = false;
            this.comments = [];
    }
}