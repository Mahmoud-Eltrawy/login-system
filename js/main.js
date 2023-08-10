
let inputName=document.getElementById("name");
let inputEmail=document.getElementById("email");
let inputPassword=document.getElementById("password");



function isNameValidate(){
    const regex=/^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    if(regex.test(inputName.value)==true){
        return true;
    }
    else{
        return false;
    }

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



let listOffUser=[];

// function isNotFind(user){
//     for(let i=0;i<listOffUser.length;i++){
//         if(user.name.value==listOffUser[i].name||user.email.value==listOffUser[i].email||user.password.value==listOffUser[i].password){
//             return true;
//         }
        
        
        
//     }
// }

let ele=document.createElement("p");
document.getElementById("form").append(ele);

if(localStorage.getItem("users")!=null){
    listOffUser=JSON.parse(localStorage.getItem("users"));
}

function signIn(){
    document.querySelector("#form p").innerHTML="";

    let user={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,


    };
    if(isNameValidate()&&isEmailValidate()&&isPasswordValidate()){
        let counter=0;
        for(let i=0;i<listOffUser.length;i++){
            if(user.name==listOffUser[i].name||user.email==listOffUser[i].email||user.password==listOffUser[i].password){
                counter++;
            }
        }
        if(counter==0){
            listOffUser.push(user);
            localStorage.setItem("users",JSON.stringify(listOffUser));
           console.log(listOffUser);
            
            ele.classList.add("text","py-2");
            let myText=document.createTextNode("Success");
            ele.append(myText);
             document.getElementById("form").append(ele);
             location.replace("../html/index.html");

           
            

             
           



            


        


        }
        else {

            
            ele.classList.add("color-red","py-2");
            let myText=document.createTextNode("email or password already exists");
            ele.append(myText);
            document.getElementById("form").append(ele);
            console.log("valid2");

        }
        

    }
    else if(!isNameValidate()){
        
        ele.classList.add("color-red","py-2");
        let myText=document.createTextNode("name is not valid");
        ele.append(myText);
         document.getElementById("form").append(ele);
                console.log("valid3");

      }
      else if(!isEmailValidate()){
        
        ele.classList.add("color-red","py-2");
        let myText=document.createTextNode("email is not valid");
        ele.append(myText);
         document.getElementById("form").append(ele);
                console.log("valid3");
      }
      else if(!isPasswordValidate()){
        
        ele.classList.add("color-red","py-2");
        let myText=document.createTextNode("password is not valid");
        ele.append(myText);
         document.getElementById("form").append(ele);
                console.log("valid3");

      }
}

let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    signIn();
  
})






























