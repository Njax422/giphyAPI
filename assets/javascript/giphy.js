//      * `q`
//      * `limit`
//      * `rating`

    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });

var topics = ["dog", "cat", "mouse"];


// 2. Your app should take the topics in this array and create buttons in your HTML.
//    * Try using a loop that appends a button for each string in the array.

// 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. 

// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
    // $(".gif").on("click", function() {
    //   var state = $(this).attr("data-state");
    //   if (state === "still") {
    //     $(this).attr("src", $(this).attr("data-animate"));
    //     $(this).attr("data-state", "animate");
    //   } else {
    //     $(this).attr("src", $(this).attr("data-still"));
    //     $(this).attr("data-state", "still");
    //   }
    // });

// 5. Under every gif, display its rating (PG, G, so on). 
//    * This data is provided by the GIPHY API.
//    * Only once you get images displaying with button presses should you move on to the next step.

// 6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.




























// Your app should take the topics in this array and create buttons in your HTML.
// Try using a loop that appends a button for each string in the array.
// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
// Under every gif, display its rating (PG, G, so on).
// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.
// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.


// $("button").on("click", function() {
// 	console.log("button clicked");
// 	var selection = $(this).attr("data-animal");

// 	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         selection + "&api_key=dc6zaTOxFJmzC&limit=10";

//     $.ajax({
//     	url: queryURL,
//     	method: "GET"
//     })

//     .done (function(response) {

//     var results = response.data;

//     for (var i=0; i < results.length; i++) {

//     	if (results[i].rating !== "r" && results [i].rating !== "pg-13") {

//     		var gifDiv = $("<div class='item'>");

//     		var rating = results[i].rating;

//     		var image = $("<img>");

//     		image.attr("src", results[i].images.fixed_height.url);

// 			gifDiv.append(image);

// 			$("#display").prepend(gifDiv);
//     	}
//     }
// }