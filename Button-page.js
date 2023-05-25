let bigEdata = [
    { 
        id : "1",
        HtmlCode : `<div class="uiverse-tooltip">
        <span class="tooltip-button">uiverse.io</span>
        <span> Tooltip </span>
      </div>`,
        CssCode : `.uiverse-tooltip {
            position: relative;
            background: #ffffff;
            color: #000;
            padding: 15px;
            margin: 10px;
            border-radius: 10px;
            width: 150px;
            height: 50px;
            font-size: 17px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          
          .tooltip-button {
            position: absolute;
            top: 0;
            font-size: 14px;
            background: #ffffff;
            color: #ffffff;
            padding: 5px 8px;
            border-radius: 5px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          
          .tooltip-button::before {
            position: absolute;
            content: "";
            height: 8px;
            width: 8px;
            background: #ffffff;
            bottom: -3px;
            left: 50%;
            transform: translate(-50%) rotate(45deg);
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          
          .uiverse-tooltip:hover .tooltip-button {
            top: -45px;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
          }
          
          svg:hover span,
          svg:hover .tooltip-button {
            text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
          }
          
          .uiverse-tooltip:hover,
          .uiverse-tooltip:hover .tooltip-button,
          .uiverse-tooltip:hover .tooltip-button::before {
            background: linear-gradient(320deg, rgb(3, 77, 146), rgb(0, 60, 255));
            color: #ffffff;
          }
        
          .cta {
            border: none;
            background: none;
          }
          
          .cta span {
            padding-bottom: 7px;
            letter-spacing: 4px;
            font-size: 14px;
            padding-right: 15px;
            text-transform: uppercase;
          }
          
          .cta svg {
            transform: translateX(-8px);
            transition: all 0.3s ease;
          }
          
          .cta:hover svg {
            transform: translateX(0);
          }
          
          .cta:active svg {
            transform: scale(0.9);
          }
          
          .hover-underline-animation {
            position: relative;
            color: black;
            padding-bottom: 20px;
          }
          
          .hover-underline-animation:after {
            content: "";
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #000000;
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
          }
          
          .cta:hover .hover-underline-animation:after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }`,

    }
];
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
let SmallSquareG = document.getElementsByClassName("small-square");
let DataID ;
for (let i=0;i<SmallSquareG.length;i++) {  
    SmallSquareG[i].setAttribute("data-id" , i + 1 )   
    SmallSquareG[i].addEventListener('click', function goToDetail(){
        params.set("data-id", SmallSquareG[i].innerHTML )
        window.location.href = `./detail-page.html?${params.toString()}`;  
        
    });
     document.getElementById("Animate").innerHTML = params.get("data-id")
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
    } 
    if (SignInSucess = true){
        signInBtn.innerHTML = `xin chao ${EmailLogin}`
    } 
}

function SignUp(){
    const Name= document.getElementById("Name").value;
    const Email = document.getElementById("SignUpEmail").value;
    const Password = document.getElementById("SignUpPassword").value;
    const signInBtn = document.querySelector(".signin")
    let SignUpSucess = false;
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


for ( let i = 0; i< 5;i++){
    if ( NavElements[i].href.includes(windowPathName)){
        NavElements[i].classList.replace("Element","active")
    }
}


function turnOnHtmlField(){
    document.getElementById("html-code").style.zIndex = "3"
    document.getElementById("css-code").style.zIndex ="-1"
    document.getElementById("css-btn").style.background="black"
    document.getElementById("html-btn").style.background="#424242"
}

function turnOnCssField(){
    document.getElementById("html-code").style.zIndex = "-1"
    document.getElementById("css-code").style.zIndex ="3"
    document.getElementById("html-btn").style.background="black"
    document.getElementById("css-btn").style.background="#424242"
}

// const params = new URLSearchParams(window.location.search)
// params.get('id')




