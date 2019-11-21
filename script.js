function openMenu(e){
    
let menu = document.getElementsByClassName('navbar-flex')
for(let i=0;i<menu.length;i++){
    menu[i].style.display="block";
}

// if(menu.style.display == "grid"){
//     menu.style.display ="none";
// }else{
//     menu.style.display ="grid";
// }

}
function createPortal(e){
    console.log(e);
    
      let favDialog = document.getElementById('favDialog');
      if (typeof favDialog.showModal === "function") {
              favDialog.showModal();
            } else {
              alert("The dialog API is not supported by this browser");
            }
}
