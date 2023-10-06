class EmailClass{

    id:number;
    to:string;
    from:string;
    isMailedRead:boolean;
    isDeleted:boolean;
    type:string;
    description:string;
    
constructor(  id:number,to:string,from:string,isMailedRead:boolean,isDeleted:boolean,type:string,description:string){
   this.id=id;
   this.to=to;
   this.from=from;
   this.isMailedRead=isMailedRead;
   this.isDeleted=isDeleted;
   this.type=type;
   this.description=description;
   
}
}

export default EmailClass;