function login(){
    const EmailLogin = document.getElementById("Email").value ;
    const PasswordLogin = document.getElementById("Password").value;
    // const NameLogin = document.getElementById("Name").value;
    let user = localStorage.getItem(EmailLogin)
    let data = JSON.parse(user)
    
    if (  EmailLogin === data.Email && PasswordLogin === data.Password){
        // SignInSucess = true;
        alert("dang nhap thanh cong")
        window.location.href="./homepage.html"
        document.getElementsByClassName("signin").style.display = "none"
    } 
    if (SignInSucess = true){
        document.getElementsByClassName("signin").innerText = `xin chao ${EmailLogin}`
    } 
}

function SignUp(){
    const Name= document.getElementById("Name").value;
    const Email = document.getElementById("SignUpEmail").value;
    const Password = document.getElementById("SignUpPassword").value;
    const signInBtn = document.getElementsByClassName("signin")
    let existingEmail = false;
    let SignUpSucess = false;
    if ( Password.length < 8) {
        alert('vui long nhap pass word du 8 ki tu');
        return;
    }
    for ( let user of UserProfile){
        if ( user.Email === Email){
            existingEmail = true;
        }
    }
    if ( existingEmail === true){
        alert('Email đã tồn tại')
    } else if(existingEmail === false) {
        alert('Đăng kí Thành Công')
        SignUpSucess = true;
        UserProfile.push({
            Name: Name,
            Email : Email,
            Password : Password,
        });
        signInBtn.innerText = `xin chao ${Name}`
    
        localStorage.setItem(Email,JSON.stringify(UserProfile))
    }
}