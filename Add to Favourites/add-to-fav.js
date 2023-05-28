// function updateOtherPage() {
//   // Get the other page content elements
//   var otherPageContent1 = document.getElementById("otherPageContent1");
//   var otherPageContent2 = document.getElementById("otherPageContent2");

//   // Retrieve the copied items from localStorage
//   var itemToCopy1 = localStorage.getItem("itemToCopy1");
//   var itemToCopy2 = localStorage.getItem("itemToCopy2");

//   // Update the other page content with the copied items
//   if (itemToCopy1) {
//     otherPageContent1.innerHTML = itemToCopy1;
//   }

//   if (itemToCopy2) {
//     otherPageContent2.innerHTML = itemToCopy2;
//   }
// }

// // Initialize the other page with the copied items
// updateOtherPage();


function updateOtherPage() {
    // Retrieve the copied items from localStorage
    for (var i = 1; i <= 12; i++) {
      var itemToCopy = localStorage.getItem("itemToCopy" + i);
      var otherPageContent = document.getElementById("otherPageContent" + i);
  
      // Update the other page content with the copied items
      if (itemToCopy) {
        otherPageContent.innerHTML = itemToCopy;
      }
    }
  }
  
  // Initialize the other page with the copied items
  updateOtherPage();


  let paramsCk = new URLSearchParams(window.location.search)
let SmallSquareCk = document.getElementsByClassName("small-square-chck");
for (let i=0;i<SmallSquareCk.length;i++) {  
    SmallSquareCk[i].setAttribute("data-ck" , i + 1 )  
    SmallSquareCk[i].addEventListener('click', function goToDetail(){
        paramsCk.set("data-ck", SmallSquareCk[i].getAttribute("data-ck") )
        window.location.href = `/detail-page.html?${paramsCk.toString()}`;  
        
    });
}