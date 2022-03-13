window.fn = {
};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();

};

var previous_page = null;
var current_page = "home.html";

window.fn.back = function ()
{
  window.fn.load(previous_page);
}

window.fn.load = function(page) {
  current_page=page;
  var storage = document.getElementById("storage");
  var list = document.getElementById("movies_list");
 
  if(page == "home.html" && storage)
  {
    var str = "Width: "+screen.availWidth.toString();
    str+= "\n Height: "+screen.availHeight.toString();

  loadHTML(url,callback,storage);
  
  var movie = (document.getElementById("col_1")? document.getElementById("col_1").getElementsByTagName("img"): null);
  var img = null;


 for(var i =0; i<((movie != null)?movie.length:-1);i++)
    if(movie.item(i))
    {
      movie.item(i).setAttribute("src","Godless.jpg");
    }
    var search = document.getElementById("search");
    
  }
 
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));

     
};


window.fn.itemClick = function(id)
{
  
  
  var element = document.getElementById(id);
  var imgs = element.getElementsByTagName("img");
  var divs = element.getElementsByClassName("movie_title" );
  
  for(var i=0;i<imgs.length;i++)
  {
    var img = imgs.item(i);
    var div = divs.item(i);
    
    if(img)
    {
      
      if(current_page != previous_page || previous_page ==null)
      {
        previous_page=current_page;
      }
      
      ons.notification.alert(divs[0].innerHTML);
      window.fn.load("details.html");
      
    }
  }
}