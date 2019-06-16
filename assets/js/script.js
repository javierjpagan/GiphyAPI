let topics = ["Japan", "United States", "Canada", "France", "Italy", "Australia", "China", "Germany", "Mexico", "Brazil"];

// ========================================================================================================================

displayButtons();
// addButton();

// ========================================================================================================================

function displayButtons() {

    for (let i = 0; i < topics.length; i++) {
        let btn = $("<button class = 'btn btn-info mx-1'>");
        btn.text(topics[i]);
        $("#buttonsDiv").append(btn)
    };
};


// $("#addCountry").on("click", function (event) {
           // event.preventDefault();

           // var addCountry = $("#addCountry").val().trim();
          //  topics.push(addCountry);



      //  }
         function addButton() {
            
            event.preventDefault();

            let inputbtn = $("#addCountry").val().trim();
            topics.push(inputbtn);
            console.log(topics);
            console.log(inputbtn);
        });