namespace HayDay{

   export class Silo {
        name:string;
        quantity:number;
        capacity:number;
        demand:number;



        constructor(_name:string,_quantity:number,_capacity:number,_demand:number){
            

            this.set(_name,_quantity,_capacity,_demand);

        }
       
        set(_a:string,_b:number,_c:number,_d:number): void {
            this.name = _a;
            this.quantity = _b;
            this.capacity=_c;
            this.demand=_d;
           

        }

        restock():void{

            let supply:number = 0;
           
            

            if (this.quantity < this.demand){

                supply =this.capacity - this.quantity;
                this.quantity  =supply + this.quantity;
                console.log(this.name+" "+"are under demand order is placed !");
                
                console.log("you got"+"  "+supply+" "+this.name+" "+ "delivered");
                console.log(" new quantity = "+ " "+ this.quantity);
                

            }else
                console.log(this.name+" "+ "not need to be filled");
        }
    }

    

}