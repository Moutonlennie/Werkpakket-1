let beschrijving = document.getElementById('beschrijving');
let detail_kenmerken = document.getElementById('detail-kenmerken');

let kenmerken = document.getElementById('kenmerk');
let detail_beschrijving = document.getElementById('detail-beschrijving');

beschrijving.addEventListener("click", function (e) {
    detail_kenmerken.style.display = "none";
    kenmerken.style.borderBottom = "none";
    detail_beschrijving.style.display = "block";
    beschrijving.style.borderBottom = "3px solid tan";

    
  });

  kenmerken.addEventListener("click", function (e) {
    detail_beschrijving.style.display = "none";
    beschrijving.style.borderBottom = "none";
    detail_kenmerken.style.display = "block";
    kenmerken.style.borderBottom = "3px solid tan";
    

  });