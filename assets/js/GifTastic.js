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

let data;
let stillId;
let activeId;

// add initial buttons to page
renderButtons();
// add new buttons
$(document).on("click", "#addCountryBtn", addTopicBtn);
//get gifs from Giphy.com and render them to the page
$(document).on("click", ".topic", displayTopicInfo);
// click still gifs to move
$(document).on("click", '.stillGifs', clickStillGifs);
// click active gifs to make stop moving
$(document).on("click", '.activeGifs', clickActiveGifs);

function renderButtons() {
    // $("#buttonsDiv").empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button class = 'btn btn-info m-2'>");
        a.addClass("topic");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttonsDiv").append(a);
        console.log(topics);
    }
}

function addTopicBtn() {
    const topic = $("#input-country").val().trim();
    topics.push(topic);
    $("#input-country").val("");
    renderButtons();
    console.log(topics);
}

function clickStillGifs(event) {
    stillId = '#' + event.target.attributes.dataInfo.value + 'Still';
    activeId = '#' + event.target.attributes.dataInfo.value + 'Active';
    $(stillId).hide();
    $(activeId).show();
};

function clickActiveGifs(event) {
    stillId = '#' + event.target.attributes.dataInfo.value + 'Still';
    activeId = '#' + event.target.attributes.dataInfo.value + 'Active';
    $(stillId).show();
    $(activeId).hide();
};

function displayTopicInfo() {

    const topic = $(this).attr("data-name");
    const queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + topic + "&api_key=51wYk15kZWCQub3wEnf5kG39D3f0tvjf&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        data = response.data;

        for (var i = 0; i < data.length; i++) {
            let TopicDiv = $("<div class = 'topicDiv d-flex'>");

            const image1 = $("<img>");
            image1.attr("src", data[i].images.fixed_height_still.url);
            image1.addClass("stillGifs");
            image1.attr('id', topic + i + 'Still');
            image1.attr('dataInfo', topic + i);
            TopicDiv.append(image1);

            const image2 = $("<img>");
            image2.attr("src", data[i].images.fixed_height.url);
            image2.addClass("activeGifs");
            image2.attr('id', topic + i + 'Active');
            image2.attr('dataInfo', topic + i);
            TopicDiv.append(image2);
            $("#topics-view").prepend(TopicDiv);
        }
        $('.activeGifs').hide();
    });
}

