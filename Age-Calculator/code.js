let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");

function calculateAge(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    // this '+ 1' is beacause in this calendar month indexing starts from 0, so to represent jan we used 0+1 = 1 month. 
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();
    let d3, m3, y3;
    
    y3 = y2 - y1;
    
    if(m2 >= m1){
        m3 = m2- m1;
    } else{
        y3--;
        m3 = 12 + m2 - m1;
        //when if is false then this condition will execute and in m3 firstly m2 will be added in 12 then m1 will be substracted.
    }
    
    if(d2 >= d1){
        d3 = d2 - d1;
    } else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old`;
    
}
function getDaysInMonth(year, month){
    return new Date (year, month , 0).getDate();
}





