let paramsld = new URLSearchParams(window.location.search)
let SmallSquareLd = document.getElementsByClassName("small-square-ld");
for (let i=0;i<SmallSquareLd.length;i++) {  
    SmallSquareLd[i].setAttribute("data-ld" , i + 1 )   
    SmallSquareLd[i].addEventListener('click', function goToDetail(){
        paramsld.set("data-ld", SmallSquareLd[i].getAttribute("data-ld") )
        window.location.href = `./detail-page.html?${paramsld.toString()}`;  
        
    });
}