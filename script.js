
function compute()
{
    if (principal.value < 1){
        alert("Enter positive number");
        principal.focus();
        return;
    }
    let interest = principal.value * years.value * RTCStatsEvent.value /100;
    yearInFuture = new Date().getFullYear() + parseInt(years.value);
    result = document.getElementById("result");
    result.innerHTML = "<p>If you deposit <mark>" + principal.value +"</mark>,<br> an interest rate of <mark>" + RTCStatsEvent.value + "%</mark>.<br>You will receive an amount of <mark>" +interest+"</mark>,<br>in the year <mark>"+yearInFuture+"</mark></p>";

}

function refreshSlider(){
    rate.value
    document.getElementById("rateLable").innerText = rate.value+ "%"}

finishPage = () =>{
    var rate = document.getElementById("rate");
    var principal = document.getElementById("principal");
    var years = document.getElementById("years");
    years = document.getElementById("years");
    for(i=1; i<=10; i++){
        let element = document.createElement("option");
        element.innerText = i;
        element.setAttribute("value", i);
        years.appendChild(element);
    }
}    