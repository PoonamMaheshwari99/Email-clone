class List{

        name: string;
        description: string;
        read: boolean;
        id:number;
        
        
    constructor(name:string, desription:string,id:number ){
        this.name =name;
        this.description = desription;
        this.read = false;
        this.id=id;
      
       
    }
}

export default List;