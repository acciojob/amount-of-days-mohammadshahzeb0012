//your JS code here. If required.
           const input = (year) => {
            if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
                alert("366")
            }
            else{
                alert("365");
            }
           }
    input(prompt(""));
