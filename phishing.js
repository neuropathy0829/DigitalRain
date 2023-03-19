document.addEventListener('contextmenu',function(event){
   event.preventDefault();
},true);

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    alert("瀏覽器不支援定位功能");
}

function showPosition(position) {
    alert("緯度: " + position.coords.latitude + 
          "，經度: " + position.coords.longitude);
}
