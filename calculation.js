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
    // needed if you don't put anything into the overtime fields.
    if (isNaN(overtimeHour)) overtimeHour = 0;
    if (isNaN(overtimeMinute)) overtimeMinute = 0;
    
    if (((stayMinute + arrivalMinute) - overtimeMinute)<0) {
        overtimeHour = overtimeHour + 1;
        overtimeMinute = overtimeMinute - 60;
    }
    if((leaveMinute - (stayMinute + arrivalMinute))<0) {
        leaveHour = leaveHour - 1;
        leaveMinute = leaveMinute + 60;
    }
    if (overtimeCheck.checked & leaveCheck.checked) {
        // calculates the new overtime considering all values
        document.getElementById("result").innerHTML = (leaveHour - (stayHour + arrivalHour) + overtimeHour) + ":" + (leaveMinute - (stayMinute + arrivalMinute) + overtimeMinute);
    }
    else if (overtimeCheck.checked) {
        // calculates the time you can you go considering overtimeframewo
        document.getElementById("result").innerHTML = ((stayHour + arrivalHour) - overtimeHour) + ":" + ((stayMinute + arrivalMinute) - overtimeMinute);
    }
    else if (leaveCheck.checked) {
        // calculates the overtime based on arrival and leave time
        document.getElementById("result").innerHTML = (leaveHour - (stayHour + arrivalHour)) + ":" + (leaveMinute - (stayMinute + arrivalMinute));
    }
    else {
        // calculates the time you can go withoout any overtime usage (8:27h)
        document.getElementById("result").innerHTML = (stayHour + arrivalHour) + ":" + (stayMinute + arrivalMinute);
    }
}
// disables the function to type into the overtime fields when checkbox isn't checked
document.getElementById("overtimeUse").addEventListener("click", checkOvertime);
function checkOvertime() {
    if (overtimeUse.checked) {
        overtimeHour.disabled = false;
        overtimeMinute.disabled = false;
    }
    else {
        overtimeHour.disabled = true;
        overtimeMinute.disabled = true;
    }
}
// disables the function to type into the leave fields when checkbox isn't checked
document.getElementById("leaveUse").addEventListener("click", checkLeave);
function checkLeave() {
    if (leaveUse.checked) {
        leaveHour.disabled = false;
        leaveMinute.disabled = false;
    }
    else {
        leaveHour.disabled = true;
        leaveMinute.disabled = true;
    }
}