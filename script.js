function toggleMenu(){
  let btn=  document.getElementsByClassName("mobile-menu");
  for (var i=0;i<btn.length;i+=1){
    btn[i].style.display = 'none';
  }
  let ul = document.getElementsByClassName("navigation-menu");
  for (var i=0;i<ul.length;i+=1){
    ul[i].style.visibility = 'visible';
  }
  console.log(ul);
}