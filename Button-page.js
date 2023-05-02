const SmallSquare = [
    {
        htmlfile: ""
    }
]

const ButtonShowcase = document.getElementsByClassName("showcase-button")

function signInForm(){
    //  document.getElementsByClass("button showcase").style.animation = "disapear 1s"
     document.getElementById("signInField").style.animation= "apeared 0.75s"
     document.getElementById("signInField").style.visibility="visible";
     document.getElementById("darken-element").style.display = "block "
     document.getElementById("darken-element").blur() 
}

function turnoffFeild(){
    document.getElementById("signInField").style.animation= "disapear 0.5s"
    document.getElementById("signInField").style.visibility= "hidden" 
    document.getElementById("darken-element").style.display = "none"
}

function gotoloader(){
    location.href="http://127.0.0.1:5500/Element-loader-page.html"
}
function gotoButton(){
    location.href="http://127.0.0.1:5500/Button-page.html"
}