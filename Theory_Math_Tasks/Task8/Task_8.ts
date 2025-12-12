namespace GuardiansGate{

    const maxTry:number = Number(prompt("max Trys ?"));
    const successcount:number = Number(prompt("How much success did you need"));
    const successChance:number = Number(prompt("Successchance of each try")) /100;
    let overAllChance:number = 0;
    
   
    checkValid();
    console.log(maxTry);
    console.log(successcount);
    calculateOverallChance();    
    
    
    function checkValid():void{

        if(maxTry <0 || successcount> maxTry|| successChance > 100){
            alert("no Valid numbers")
           window.location.reload();
        };
        
        
    };

    function calculateOverallChance():void{
        

        for( let i:number = successcount; i >= maxTry; i++ ){

          overAllChance = overAllChance +  Math.pow(successChance,successcount) * (Math.pow(1 - successChance,maxTry - successcount));

 
        };


    };





}




