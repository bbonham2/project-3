// jshint esversion: 6

//1. Define the onclick handler
let failHandler = () => {
  //console.log("Fail -- unknown breed");
  $(".photos")
    .empty()
    .html("<h3>Error -- breed not found <h3>");
};

let clickHandler = function() {
  let imgElem;
  let prefixURL = "https://dog.ceo/dog-api/";
  let suffixURL = "/images/random/6";
  //get value entered by user from textbox
  let breedTag = $('input[type = "text"]')
    .val()
    .toLowerCase();
  let requestURL = prefixURL + breedTag + suffixURL;
  //console.log(requestURL);

  console.log(document.querySelectorAll("h2")[0].textContent);
  console.log(jQuery("h2")[0].textContent);

  //clear old photos
  $("photos").html("");
  //document.querySelector(".photos").innerHTML = "";

  $.getJSON(requestURL, function(dogAPIresponse) {
    //console.log(dogAPIresponse);
    dogAPIresponse.message.forEach((imgURL, index) => {
      //We need only six images for the Gallery
      if (index < 6) {
        // create a new element to hold the image
        // but hide it so we can fade it in
        let imgElem = $("<img>");
        //let imgElem = document.createElement("img");
        imgElem.hidden = true;

        // set the attribute to the response url
        imgElem.setAttribute("src", imgURL);
        imgElem.setAttribute("width", "100");

        // attach the img tag to the main
        $(".photos").append(imgElem);
        //document.querySelector(".photos").appendChild(imgElem);
        imgElem.hidden = false;
      }
    });
  }).fail(failHandler);
};

//2. Register the onclick handler for each button after the DOM is complete
window.addEventListener("load", () => {
  //select the buttons
  let buttonElem = document.querySelector("button");
  buttonElem.addEventListener("click", clickHandler);
});
