function LoginValidation(value) {
    let error={};
    const EmailValidation=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordValidation=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    console.log(value);
     
    
     if(value.Password === "")
    {
        error.Password="Password is required";
    }
     else if(!passwordValidation.test(value.Password)) 
    {
        console.log(value.Password);
        error.Password="Password did not match";
    }
    else{
        
        error.Password="";
    }

    if(value.Email === "")
    {
        error.Email="Email is required";
    }
    else{
        
        error.Email="";
    }
    return error;
 
}

export default LoginValidation