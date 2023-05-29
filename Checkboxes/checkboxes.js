const SmallSquare = [
  {
      htmlfile: ""
  }
]

// const NavElements = document.getElementsByClassName('Element')
// const windowPathName = window.location.pathname;

// for ( let i = 0; i< 5;i++){
//     if ( NavElements[i].href.includes(windowPathName)){
//         NavElements[i].classList.replace("Element","active")
//     }
// }
// let isClickNavMenu = false





// NavElements.forEach(NavElement => {
//     if (NavElement.href.includes(windowPathName)){
//         NavElement.classList.add("active")
//     }
// });



function signInForm(){
  //  document.getElementsByClass("button showcase").style.animation = "disapear 1s"
   document.getElementById("signInField").style.animation= "apeared 0.75s"
   document.getElementById("signInField").style.visibility="visible";
   document.getElementById("darken-element").style.display = "block "
}

function turnoffFeild(){
  document.getElementById("signInField").style.animation= "disapear 0.5s"
  document.getElementById("signInField").style.visibility= "hidden" 
  document.getElementById("darken-element").style.display = "none"
}

// function mobileMenuNav(){
//     isClickNavMenu = !isClickNavMenu
//     if(isClickNavMenu) {
//         document.getElementById("container").style.display="none"
//         document.getElementById("mobileNav").style.display="flex"
//     } else {
//         document.getElementById("container").style.display="block"
//         document.getElementById("mobileNav").style.display="none"
//     }
// }


let paramsCk = new URLSearchParams(window.location.search)
let SmallSquareCk = document.getElementsByClassName("small-square-chck");
for (let i=0;i<SmallSquareCk.length;i++) {  
  SmallSquareCk[i].setAttribute("data-ck" , i + 1 )   
  SmallSquareCk[i].addEventListener('click', function goToDetail(){
      paramsCk.set("data-ck", SmallSquareCk[i].getAttribute("data-ck") )
      window.location.href = `/detail-page.html?${paramsCk.toString()}`;  
      
  });
}



// -------------------------ADD TO FAVORITES------------------

// Function to copy the innerHTML to "Favorites"
function addItemToFav(elementId) {
  let content = document.getElementById(elementId).innerHTML;
  // Store the item in localStorage
  localStorage.setItem(elementId, content);
  alert("Item has been added to Favorites");
}

// Function to remove the copied item from "Favorites"
function removeItemFromFav(elementId) {
  localStorage.removeItem(elementId);
  alert("Item has been removed from Favorites");
}

// Toggle function for button clicks
function toggleCopy(elementId) {
  // Check if the item is already in local storage
  let isAddedToFav = localStorage.getItem(elementId);

  if (isAddedToFav) {
    // If the item is already added, remove it
    removeItemFromFav(elementId);
  } else {
    // If the item is not added, copy it
    addItemToFav(elementId);
  }
}

//   // Add event listeners to the buttons

//   let toggleButton1 = document.getElementById('toggleButton1');
//   toggleButton1.addEventListener('click', function() {
//     toggleCopy('itemToCopy1');
//   });

function addToggleEventListener(buttonId, itemId) {
let toggleButton = document.getElementById(buttonId);
toggleButton.addEventListener('click', function() {
  toggleCopy(itemId);
});
}

addToggleEventListener('toggleButton1', 'itemToCopy1');
addToggleEventListener('toggleButton2', 'itemToCopy2');
addToggleEventListener('toggleButton3', 'itemToCopy3');
addToggleEventListener('toggleButton4', 'itemToCopy4');
addToggleEventListener('toggleButton5', 'itemToCopy5');
addToggleEventListener('toggleButton6', 'itemToCopy6');
addToggleEventListener('toggleButton7', 'itemToCopy7');
addToggleEventListener('toggleButton8', 'itemToCopy8');
addToggleEventListener('toggleButton9', 'itemToCopy9');
addToggleEventListener('toggleButton10', 'itemToCopy10');
addToggleEventListener('toggleButton11', 'itemToCopy11');
addToggleEventListener('toggleButton12', 'itemToCopy12');