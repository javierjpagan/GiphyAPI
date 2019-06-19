let topics = ["Japan",
    "United States",
    "Canada",
    "France",
    "Italy",
    "Australia",
    "China",
    "Germany",
    "Mexico",
    "Brazil"
];

var countrysearch;
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + countrysearch + "&api_key=51wYk15kZWCQub3wEnf5kG39D3f0tvjf&limit=10";

var gifSearch = false;
var limit = 10;

// ========================================================================================================================

$(document).ready(function () {
    displayButtons();
});

// ========================================================================================================================

function displayButtons() {

    for (let i = 0; i < topics.length; i++) {
        var btn = $("<button class = 'btn btn-info m-2'>");
        btn.text(topics[i]);
        $("#buttonsDiv").append(btn);
        btn.click(function (e) {
            // var countrysearch = $(btn).attr("data-name");
            // console.log(countrysearch);


            e.preventDefault();  

            // $.ajax({
            //     url: queryURL,
            //     method: "GET"
            // })
            
            // .done(function (response) {
            //     console.log(response);
            //     $('#gifs').empty();
            //     //clearLogo();
            //     $.each(response.data, function (i, value) {
            //         var url = value.images.fixed_height_still.url;
            //         var image = $("<img>");
            //         image.addClass('col-md-4 gifSize gifmargin')
            //         image.attr('src', url);
            //         image.attr('data-still', value.images.fixed_height_still.url);
            //         image.attr('data-animate', value.images.fixed_height.url);
            //         image.attr('data-state', "still");
    
            //         $('#gifs').append(image);
            //     });

            // });
        
        });

        $("#buttonsDiv").append(btn)
    };
};


function addCountryButton(event) {


    var topic = $("#input-country").val().trim();
    topics.push(topic);
    $("#input-country").val("");
    console.log(topic);
 

   
   
//     // let btn = $("#buttonsDiv");
    btn.text(topic);
    $("#buttonsDiv").append(btn)
 

}





