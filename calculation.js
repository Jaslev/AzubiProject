function calculate() {
    //all input fields
    let arrivalHour = parseInt(document.getElementById("arrivalHour").value);
    let arrivalMinute = parseInt(document.getElementById("arrivalMinute").value);
    let stayHour = parseInt(document.getElementById("stayHour").value);
    let stayMinute = parseInt(document.getElementById("stayMinute").value);
    let overtimeHour = parseInt(document.getElementById("overtimeHour").value);
    let overtimeMinute = parseInt(document.getElementById("overtimeMinute").value);
    let leaveHour = parseInt(document.getElementById("leaveHour").value);
    let leaveMinute = parseInt(document.getElementById("leaveMinute").value);
    
    //all checkboxes
    const overtimeCheck = document.getElementById("overtimeUse");
    const leaveCheck = document.getElementById("leaveUse");

    // global calculation to calculate when to times are more than 60 min.
    if (arrivalMinute + stayMinute > 59) {
        stayHour = stayHour + 1;
        stayMinute = stayMinute - 60;

    }
    if (overtimeCheck.checked & leaveCheck.checked) {
        // calculates the new overtime considering all values
        console.log(overtimeCheck.checked);
        console.log(leaveCheck.checked);
    }
    else if (overtimeCheck.checked) {
        // calculates the time you can you go considering overtime
        console.log(overtimeCheck.checked);
        console.log(leaveCheck.checked);
    }
    else if (leaveCheck.checked) {
        // calculates the overtime based on arrival and leave time
        if((leaveMinute-(stayMinute+arrivalMinute))<0) {
            leaveHour = leaveHour - 1;
            leaveMinute = leaveMinute + 60;
        }
        document.getElementById("resultHour").innerHTML = leaveHour - (stayHour+arrivalHour);
        document.getElementById("resultMinute").innerHTML = leaveMinute - (stayMinute+arrivalMinute);
    }
    else {
        // calculates the time you can go withoout any overtime usage (8:27h)
        document.getElementById("resultHour").innerHTML = stayHour + arrivalHour;
        document.getElementById("resultMinute").innerHTML = stayMinute + arrivalMinute;
    }
}