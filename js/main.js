var websiteName  = document.getElementById("siteName");
var websiteURL   = document.getElementById("siteURL");
var submitButton = document.getElementById("submitBtn");
var urlContainer = [];

if(localStorage.getItem("websitesInfo") == null){
  urlContainer = [];
}else{
  urlContainer = JSON.parse(localStorage.getItem("websitesInfo"));
  displayData();
}

function collectData(){
  var websiteData = {
    name:websiteName.value,
    siteUrl:websiteURL.value
  }
  if(websiteName.value=="" && websiteURL.value==""){

  }else {
      urlContainer.push(websiteData);
      localStorage.setItem("websitesInfo", JSON.stringify(urlContainer));
  }
}

submitButton.onclick = function(){
  collectData();
  displayData();
}


function displayData(){
  var urls = "";
  for(var i = 0; i < urlContainer.length; i++){
    urls += `<div class="container">
    <div class="row p-4" id="showMarks">
      <h2 class="w-25 my-4">`+urlContainer[i].name+`</h2>
      <a target="_blank" href="`+urlContainer[i].siteUrl+`" class="btn btn-primary my-3 mx-1 py-2 px-3">visit</a>
      <button onclick="deleteWebsite(`+i+`)" class="btn btn-danger my-3 mx-1 py-2 px-3">Delete</button>
    </div></div>
    `
  }
  document.getElementById("previewURL").innerHTML = urls;
}

function deleteWebsite(id){
  urlContainer.splice(id, 1);
  localStorage.setItem("websitesInfo", JSON.stringify(urlContainer));
  displayData()
}
