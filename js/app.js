console.log("my js is connected!");

const myDate = '25 Jan 2025 1:59 AM';

const endDate = document.querySelector("#end-date");
endDate.innerHTML = myDate;

const AllInputs = document.querySelectorAll("input");
console.log(AllInputs);


function clock(){
    const end = new Date(myDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    // if the end date is reached, reset the clock
    if(diff <= 0){
        return;
    }

    const days = Math.floor(diff / 3600 / 24);
    const hours = Math.floor(diff / 3600) % 24;
    const minutes = Math.floor(diff / 60) % 60;
    const seconds = Math.floor(diff) % 60;

    for(let i = 0; i < AllInputs.length; i++){
        AllInputs[i].value = eval(AllInputs[i].name);
    }

    
    

    
}

// initial call
clock();


setInterval(clock, 1000);


// formula to calculate the time remaining
/*
   1 Day = 24 hours
   1 Hour = 60 minutes
   60 minutes  = 3600 seconds
*/