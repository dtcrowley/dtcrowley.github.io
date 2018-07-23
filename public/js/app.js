$(document).ready(function(){
    $("#thank-you-message").hide();
   // Initialize Firebase
   var config = {
    apiKey: "AIzaSyCT8VIPLf82OtFkuu9gkU3KNlRUuybSFNI",
    authDomain: "portfolio-dtc.firebaseapp.com",
    databaseURL: "https://portfolio-dtc.firebaseio.com",
    projectId: "portfolio-dtc",
    storageBucket: "portfolio-dtc.appspot.com",
    messagingSenderId: "592173839936"
  };

  firebase.initializeApp(config);
    // Create a variable to reference the database
    var database = firebase.database();

    // Initial Values
    var name = "";
    var email = "";
    var comment = "";

    // Capture Button Click
    $("#add-to-firebase").on("click", function() {
        // Don't refresh the page!
        event.preventDefault();

        //Providing data to Firebase
        name = $("#name-input").val().trim();
        email = $("#email-input").val().trim();
        comment = $("#comment-input").val().trim();

        var userComment = {
            name: name,
            email: email,
            comment: comment,
        };

        console.log(name);
        console.log(email);
        console.log(comment);

        database.ref().push(userComment);

        var postSubmit = $("#form-wrapper").hide();
        var thankYou = $("<h1>").text("Thanks for reaching out! I'll get back to you as soon as possible.");
        $("#thank-you-message").append(thankYou)
        $("#thank-you-message").show();

        // name = $("#name-input").val("");
        // email = $("#email-input").val("");
        // comment = $("#comment-input").val("");
    });
});