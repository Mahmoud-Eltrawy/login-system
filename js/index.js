


let inputEmail=document.getElementById("email");
let inputPassword=document.getElementById("password");


let listOffUser=[];
if(localStorage.getItem("users")!=null){
    listOffUser=JSON.parse(localStorage.getItem("users"));
}


function isEmailValidate(){
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(regex.test(inputEmail.value)==true){
        return true;
    }
    else{
        return false;
    }

}

function isPasswordValidate(){
    const regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(regex.test(inputPassword.value)==true){
        return true;
    }
    else{
        return false;
    }

}











let element=document.createElement("p");
document.getElementById("form").append(element);



function logIn(){
    document.querySelector("#form p").innerHTML="";

    let user={
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,


    };
    if(isEmailValidate()&&isPasswordValidate()){
        let counter=0;
        for(let i=0;i<listOffUser.length;i++){
            if(user.email==listOffUser[i].email&&user.password==listOffUser[i].password){
                counter++;
            }
        }
        if(counter>0){
            
            element.classList.add("text","py-2");
            let myText=document.createTextNode("Success");
            element.append(myText);
             document.getElementById("form").append(element);
             

            
             




             location.replace("../html/hello.html");
                    
            

             
           



            


        


        }
        else {

            
            element.classList.add("color-red","py-2");
            let myText=document.createTextNode("email or password is not exists");
            element.append(myText);
            document.getElementById("form").append(element);
            console.log("valid2");

        }
        

    }
    
      else if(!isEmailValidate()){
        
        element.classList.add("color-red","py-2");
        let myText=document.createTextNode("email is not valid");
        element.append(myText);
         document.getElementById("form").append(element);
                console.log("valid3");
      }
      else if(!isPasswordValidate()){
        
        element.classList.add("color-red","py-2");
        let myText=document.createTextNode("password is not valid");
        element.append(myText);
         document.getElementById("form").append(element);
                console.log("valid3");

      }
}

let btnTwo=document.getElementById("btn");
btn.addEventListener("click",function(){
   logIn();
  
})


let buttn=document.getElementById("btun");
buttn.addEventListener("click",function(){
    location.replace("../html/index.html");

})
