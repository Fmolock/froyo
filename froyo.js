const flavors = window.prompt('Enter Flavors').split(',');



const stats = {};

for(let i = 0; i < flavors.length; i++){
 let currentFlavor = flavors[i];
    //check to see if current flavor is already a key in stats
    if(stats[currentFlavor]){
        stats[currentFlavor]++;
   //if key already exists, then incriment value by 1
    }else{
        stats[currentFlavor] = 1;

    }


    //if current flavor is not already a key, then what do we want to do? then add curretn flavor as a key. and set value to 1

    



    
}

console.log(stats);