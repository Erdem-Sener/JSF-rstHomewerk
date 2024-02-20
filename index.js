function myFunction(){
    let fullName = prompt('Adınız Nedir?');
    if(fullName != null){
        document.getElementById('myName').innerHTML = fullName;
    }
}
myFunction();


let currentDate = new Date();


document.getElementById("myClock").innerHTML = currentDate;