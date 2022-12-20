function validimi(){
    var emriUserit = document.getElementById(f.name).value;
    console.log(emriUserit);
    var emri2userit = document.getAnimations(l.name).value;
    console.log(emri2Userit);
    var emailUserit = document.getAnimations(email).value;
    console.log(emailUserit);
    var passUserit = document.getAnimations(pass).value;
    console.log(passUserit);
    var pass2Userit = document.getAnimations(c.pass).value;
    console.log(pass2userit);
    var telUserit = document.getAnimations(number).value;
    console.log(telUserit);

    if(emriUserit == ""){
        alert("Please fill in this field ! ")
    }
    if(emri2Userit == ""){
        console.log("Please fill in this field ! ")
    }
    if(emailUserit == ""){
        console.log("Please fill in this field !")
    }
    if(pass2Userit == ""){
        console.log("Please fill in this field ! ")
    }
    if(telUserit == ""){
        console.log("Please fill in this field ! ")
    } else{
        alert("Regjistrimi eshte kryer me sukses.")
    }

}