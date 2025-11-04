namespace Fire{

   export  class Torch extends Light{
        public wood:string; //enum also possible
        public material:string;
        public size:number;


       public constructor(_strength:number,_color:string,_wood:string,_material:string,_size:number){
        super(_strength,_color)
        this.wood =_wood;
        this.material = _material;
        this.size = _size;


        }
        public log(): void {
            console.log("log")
        }
    }
}