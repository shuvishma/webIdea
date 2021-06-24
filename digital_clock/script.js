function updateTime() {
    var dateInfo = new Date() ;

    var hour , 
    minute = (dateInfo.getMinutes() < 10) ? "0"+dateInfo.getMinutes() : dateInfo.getMinutes() ;
    second = (dateInfo.getSeconds() < 10) ? "0"+dateInfo.getSeconds() : dateInfo.getSeconds() ;
    ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM" ;
    
    if(dateInfo.getHours() == 0) {
        hour = 12 ;
    }
    else if(dateInfo.getHours() >= 12) {
        hour = dateInfo.getHours() - 12 ;
    }
    else {
        hour = dateInfo.getHours() ;
    }

    document.getElementById("hms").innerHTML = hour + ":" + minute + ":" + second + "  " + ampm ;

    setTimeout(updateTime, 1000) ;

    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"], 
    month = ["January" , "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] ,
    dayDate = dateInfo.getDate() ;
    document.getElementById("date").innerHTML = day[dateInfo.getDay()] + " " + month[dateInfo.getMonth()] + " " + dayDate + ", " + dateInfo.getFullYear() ;
}
