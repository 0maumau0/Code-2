namespace HayDay{

   export class Silo {
        name:string;
        quantity:number;
        capacity:number;
        demand:number;



        constructor(_name:string,_quantity:number,_capacity:number,_demand:number){
            

            this.set(_a,_b,_c,_d);

        }
       
        set(_a:string,_b:number,_c:number,_d:number): void {
            this.name = _a;
            this.quantity = _b;
            this.capacity=_c;
            this.demand=_d;
           

        }
    }

    

}