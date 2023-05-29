
function updatePage() {
  // Retrieve the copied items from localStorage
  for (var i = 1; i <= 12; i++) {
    var itemToCopy = localStorage.getItem("itemToCopy" + i);
    var itemCopied = document.getElementById("itemCopied" + i);

    // Update the other page content with the copied items
    if (itemToCopy) {
      itemCopied.innerHTML = itemToCopy;
    }
  }
}

// Initialize the other page with the copied items
updatePage();


let paramsCk = new URLSearchParams(window.location.search)
let SmallSquareCk = document.getElementsByClassName("small-square-chck");
for (let i=0;i<SmallSquareCk.length;i++) {  
  SmallSquareCk[i].setAttribute("data-ck" , i + 1 )  
  SmallSquareCk[i].addEventListener('click', function goToDetail(){
      paramsCk.set("data-ck", SmallSquareCk[i].getAttribute("data-ck") )
      window.location.href = `/detail-page.html?${paramsCk.toString()}`;  
      
  });
}