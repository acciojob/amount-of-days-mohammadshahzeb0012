           function func() {
            let year = prompt("enter year")
            Number(year);
            if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
                alert("leap year")
            }
            else{
                alert("not leap year");
            }
           }