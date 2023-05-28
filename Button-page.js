
// function goToDetail(){
//     window.location.href= "./detail-page.html";
// // //     for ( let i=0;i< bigEdata.length;i++){
// // //         if(SmallSquareG[i] === bigEdata[i].id){
// // //             window.location.href="./detail-page.html"
// // //             document.getElementById("html-code").innerHTML="showcode"
// // //         }
// // //     }
// }
let params = new URLSearchParams(window.location.search)
let AnimateView = document.getElementById("Animate")
let SmallSquareG = document.getElementsByClassName("small-square-btn");
let DataID ;
for (let i=0;i<SmallSquareG.length;i++) {  
    SmallSquareG[i].setAttribute("data-id" , i + 1 )   
    SmallSquareG[i].addEventListener('click', function goToDetail(){
        params.set("data-id", SmallSquareG[i].getAttribute("data-id") )
        window.location.href = `./detail-page.html?${params.toString()}`;  
        
    });
  }


   
  

        








let UserProfile = [];
if(JSON.parse(localStorage.getItem('UserProfile')) !== null ){
    UserProfile = JSON.parse(localStorage.getItem('UserProfile'))
}
let SignInSucess = false;
function login(){
    const EmailLogin = document.getElementById("SignUpEmail").value;
    const PasswordLogin = document.getElementById("SignUpPassword").value;
    const NameLogin = document.getElementById("Name").value;
    let user = localStorage.getItem(NameLogin)
    let data = JSON.parse(user)
    if ( NameLogin == data.Name && EmailLogin == data.Email && PasswordLogin == data.Password){
        SignInSucess = true;
        alert("dang nhap thanh cong")
        window.location.href="./homepage.html"
        // document.getElementsByClassName("signin").style.display = "none"
    } 
    if (SignInSucess = true){
        document.getElementsByClassName("signin").innerText = `xin chao ${EmailLogin}`
    } 
}

function SignUp(){
    const Name= document.getElementById("Name").value;
    const Email = document.getElementById("SignUpEmail").value;
    const Password = document.getElementById("SignUpPassword").value;
    const signInBtn = document.querySelector(".signin")
    let existingEmail = false;
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
    } else {
        alert('Đăng kí Thành Công')
        SignUpSucess = true;
        UserProfile.push({
            Name: Name,
            Email : Email,
            Password : Password,
        });
    if (SignUpSucess = true){
        signInBtn.innerHTML = `xin chao ${Name}`
    }
        localStorage.setItem(Name,JSON.stringify(UserProfile))
    }
    
}  


    //     Username: UserName,
    //     Email: UserEmail,
    //     Password: UserPassword,
    // };
    
//         let LocalUser = JSON.parse(localStorage.getItem(UserEmail.value));
//         if (UserEmail === LocalUser) {
//             console.log("Email da ton tai")
//         } else  {
//             var obj = JSON.stringify(user);
//             SignUpSucess = true;
//             localStorage.setItem(UserName, obj);
//             window.location.href="/homepage.html"
//         }
//     event.preventDefault();
// }


let isClickNavMenu = false

function mobileMenuNav(){
    isClickNavMenu = !isClickNavMenu
    if(isClickNavMenu) {
        // document.getElementById("container").style.display="none"
        document.getElementById("mobileNav").style.display="flex"
    } else {
        // document.getElementById("container").style.display="block"
        document.getElementById("mobileNav").style.display="none"
    }
}










// NavElements.forEach(NavElement => {
//     if (NavElement.href.includes(windowPathName)){
//         NavElement.classList.add("active")
//     }
// });



function signInForm(){
    //  document.getElementsByClass("button showcase").style.animation = "disapear 1s"
     document.getElementById("signInField").style.animation= "apeared 0.75s"
     document.getElementById("sign-Up-Field").style.animation= "disapear 0.75s"
     document.getElementById("signInField").style.visibility="visible";
     document.getElementById("darken-element").style.display = "block "
     document.getElementById("sign-Up-Field").style.visibility="hidden"
     document.getElementById("signInField").style.position="fixed"

}

function turnoffFeild(){
    document.getElementById("signInField").style.animation= "disapear 0.75s"
    document.getElementById("sign-Up-Field").style.animation= "disapear 0.75s"
    document.getElementById("signInField").style.visibility= "hidden" 
    document.getElementById("darken-element").style.display = "none"
    document.getElementById("sign-Up-Field").style.visibility="hidden"
}

function onsignupField(){
    document.getElementById("sign-Up-Field").style.animation= "apeared 0.75s"
    document.getElementById("signInField").style.animation= "disapear 0.75s"
     document.getElementById("sign-Up-Field").style.visibility="visible";
     document.getElementById("darken-element").style.display = "block"
     document.getElementById("signInField").style.visibility= "hidden"
     document.getElementById("sign-Up-Field").style.position="fixed"
}


const NavElements = document.getElementsByClassName('Element')
const windowPathName = window.location.pathname;


for ( let i = 0; i< 10;i++){
    if ( NavElements[i].href.includes(windowPathName)){
        NavElements[i].classList.replace("Element","active")
    }
}


function turnOnHtmlField(){
    document.getElementById("html-code").style.zIndex = "3"
    document.getElementById("css-code").style.zIndex ="-1"
    document.getElementById("css-btn").style.background="black"
    document.getElementById("html-btn").style.background="#f17108"
    document.getElementById("btn-copy-html").style.zIndex="4"
    document.getElementById("btn-copy-css").style.zIndex="-2"
}

function turnOnCssField(){
    document.getElementById("html-code").style.zIndex = "-1"
    document.getElementById("css-code").style.zIndex ="3"
    document.getElementById("html-btn").style.background="black"
    document.getElementById("css-btn").style.background="#008cff"
    document.getElementById("btn-copy-html").style.zIndex="-2"
    document.getElementById("btn-copy-css").style.zIndex="4"
}

 

// const params = new URLSearchParams(window.location.search)
// params.get('id')




