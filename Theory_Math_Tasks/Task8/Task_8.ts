namespace GuardiansGate{

    const maxTry:number = Number(prompt("max Trys ?"));
    const minSuccesses:number = Number(prompt("How much success did you need"));
    const successChance:number = Number(prompt("Successchance of each try"));
    
   
    checkValid();
    console.log(maxTry);
    console.log(minSuccesses);
    
    
    
    function checkValid():void{

        if(maxTry <0 || minSuccesses> maxTry|| successChance > 100){
            alert("no Valid numbers")
           window.location.reload();
        };
        
        
    };





}




