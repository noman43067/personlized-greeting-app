
function getGreeting(){
    var username=prompt('Enter your name');
    var age=+prompt('Enter your Age');
    if (age>=18){
        document.getElementById('greeting').innerHTML=
       ` Welcome ${username}!You are eligible to join!`;
    }
         else if (age<18){
            document.getElementById('greeting').innerHTML=
            `Sorry ${username}!You are not eligible to join!`;
        }
    
        else{
            document.getElementById('greeting').innerHTML=
           ` Sorry! Enter again!`;   
}

}