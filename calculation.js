function calculate() {
    //alle Input boxen
    let arrivalHour = parseInt(document.getElementById("arrivalHour").value);
    let arrivalMinute = parseInt(document.getElementById("arrivalMinute").value);
    let stayHour = parseInt(document.getElementById("stayHour").value);
    let stayMinute = parseInt(document.getElementById("stayMinute").value);
    let overtimeHour = parseInt(document.getElementById("overtimeHour").value);
    let overtimeMinute = parseInt(document.getElementById("overtimeMinute").value);
    let leaveHour = parseInt(document.getElementById("leaveHour").value);
    let leaveMinute = parseInt(document.getElementById("leaveMinute").value);
    
    //alle Checkboxen
    const overtimeCheck = document.getElementById("overtimeUse");
    const leaveCheck = document.getElementById("leaveUse");

    if (arrivalMinute + stayMinute > 59) {
        stayHour = stayHour + 1;
        stayMinute = stayMinute - 60;
    }
    if (overtimeCheck.checked & leaveCheck.checked) {
        console.log(overtimeCheck.checked);
        console.log(leaveCheck.checked);
    }
    else if (overtimeCheck.checked) {
        console.log(overtimeCheck.checked);
        console.log(leaveCheck.checked);
    }
    else if (leaveCheck.checked) {
        if((leaveMinute-(stayMinute+arrivalMinute))<0) {
            leaveHour = leaveHour - 1;
            leaveMinute = leaveMinute + 60;
        }
        document.getElementById("resultHour").innerHTML = leaveHour - (stayHour+arrivalHour);
        document.getElementById("resultMinute").innerHTML = leaveMinute - (stayMinute+arrivalMinute);
    }
    else {
        document.getElementById("resultHour").innerHTML = stayHour + arrivalHour;
        document.getElementById("resultMinute").innerHTML = stayMinute + arrivalMinute;
    }
}