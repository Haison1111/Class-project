const SmallSquare = [
    {
        htmlfile: ""
    }
]

const NavElements = document.getElementsByClassName('Element')
const windowPathName = window.location.pathname;


for ( var i = 0; i< 5;i++){
    if ( NavElements[i].href.includes(windowPathName)){
        NavElements[i].classList.replace("Element","active")
    }
}
var isClickNavMenu = false





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

function mobileMenuNav(){
    isClickNavMenu = !isClickNavMenu
    if(isClickNavMenu) {
        document.getElementById("container").style.display="none"
        document.getElementById("mobileNav").style.display="flex"
    } else {
        document.getElementById("container").style.display="block"
        document.getElementById("mobileNav").style.display="none"
    }
}


// -------------------------ADD TO FAVORITES------------------
  // Function to copy the innerHTML to the other page
  function addItemToFav(elementId) {
    // Get the content to be copied
    var content = document.getElementById(elementId).innerHTML;

    // Store the content in localStorage
    localStorage.setItem(elementId, content);
    alert("Item has been added to Favorites");
  }

  // Function to remove the copied content from the other page
  function removeItemFromFav(elementId) {
    // Remove the content from localStorage
    localStorage.removeItem(elementId);
    alert("Item has been removed from Favorites");
  }

  // Toggle function to handle the button click
  function toggleCopy(elementId) {
    var toggleButton = document.getElementById(elementId);

    // Check if the item is already added to favorites
    var isAddedToFav = localStorage.getItem(elementId);

    if (isAddedToFav) {
      // If the item is already added, remove it
      removeItemFromFav(elementId);
    } else {
      // If the item is not added, copy it
      addItemToFav(elementId);
    }
  }

  // Add event listeners to the buttons
  var toggleButton1 = document.getElementById('toggleButton1');
  toggleButton1.addEventListener('click', function() {
    toggleCopy('itemToCopy1');
  });

  var toggleButton2 = document.getElementById('toggleButton2');
  toggleButton2.addEventListener('click', function() {
    toggleCopy('itemToCopy2');
  });

  var toggleButton3 = document.getElementById('toggleButton3');
toggleButton3.addEventListener('click', function() {
  toggleCopy('itemToCopy3');
});

var toggleButton4 = document.getElementById('toggleButton4');
toggleButton4.addEventListener('click', function() {
  toggleCopy('itemToCopy4');
});

var toggleButton5 = document.getElementById('toggleButton5');
toggleButton5.addEventListener('click', function() {
  toggleCopy('itemToCopy5');
});

var toggleButton6 = document.getElementById('toggleButton6');
toggleButton6.addEventListener('click', function() {
  toggleCopy('itemToCopy6');
});

var toggleButton7 = document.getElementById('toggleButton7');
toggleButton7.addEventListener('click', function() {
  toggleCopy('itemToCopy7');
});

var toggleButton8 = document.getElementById('toggleButton8');
toggleButton8.addEventListener('click', function() {
  toggleCopy('itemToCopy8');
});

var toggleButton9 = document.getElementById('toggleButton9');
toggleButton9.addEventListener('click', function() {
  toggleCopy('itemToCopy9');
});

var toggleButton10 = document.getElementById('toggleButton10');
toggleButton10.addEventListener('click', function() {
  toggleCopy('itemToCopy10');
});

var toggleButton11 = document.getElementById('toggleButton11');
toggleButton11.addEventListener('click', function() {
  toggleCopy('itemToCopy11');
});

var toggleButton12 = document.getElementById('toggleButton12');
toggleButton12.addEventListener('click', function() {
  toggleCopy('itemToCopy12');
});

