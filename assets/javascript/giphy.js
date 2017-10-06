var topics = ["Coffee", "Doughnut", "Bacon", "Eggs"];

function displayGifs() {
    var x = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    x + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
        console.log("logging");
        console.log(response.data)
        var results = response.data;
        for (var i=0; i < results.length; i++) {
           if(results[i].rating !== "r" && results[i].rating !== "pg-13"){
                var rating = results[i].rating;
                var p =$("<p>").text("Rating: " + rating);
                var gifDiv = $("<div class='gifs'>");
                var image = $("<img>");
                image.attr("src", results[i].images.fixed_height_still.url);
                gifDiv.append(image);
                gifDiv.append(p);
                $("#display-gifs").prepend(gifDiv);
            };
        };
    });
}

function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("gifButton btn btn-info");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
    };
}

$("#add-gif").on("click", function(event) {
    event.preventDefault();
    var giphy = $("#gif-input").val().trim();
    topics.push(giphy);
    renderButtons();
});

// Adding a click event listener to all elements with a class of "movie"
$(document).on("click", ".gifButton", displayGifs);

// Calling the renderButtons function to display the intial buttons
renderButtons();











