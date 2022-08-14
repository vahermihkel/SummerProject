export class Contact {
    public contact_name: string;
    public contact_email: string;
    public contact_phone: string;
    public topic: string;
    public message: string;

    constructor(
        contact_name: string, 
        contact_email: string,
        contact_phone: string, 
        topic: string,
        message: string){
            this.contact_name = contact_name;
            this.contact_email = contact_email;
            this.contact_phone = contact_phone;
            this.topic = topic;
            this.message = message;
        }
}