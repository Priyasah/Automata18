/*
  Title: Random Quote Generator
  Author: Arunas Skirius (@arukomp)
  Description: This code uses the WikiQuote.org api to get a specific page containing thousands of quotes. The results comes formatted in HTML, so additional parsing is needed to convert the data into "more friendly" format, a simple two-dimensional array (quote and author).
  The data is fetched and processed on page load ($(document).ready) and an initial random quote is displayed, all before any other user interaction.
*/
//
// var quoteTag = $("#quote");
// var authorTag = $("#author");
// var currentQuote;
// var html;
// var quoteList = [];
//
// // picks a random number out of all quotes available in the list generated before, and presents the quote in the correct html tags with proper formatting.
// function newRandomQuote() {
//   var randomNumber = Math.floor(Math.random() * (quoteList.length - 1));
//   var currentQuote = quoteList[randomNumber];
//
//   // update quote and author texts, both with fading animations
//   quoteTag.fadeOut("slow", function(){
//     $(this).html(currentQuote[0].replace(/\n\n/g, "<br />")).fadeIn("slow");
//   });
//   authorTag.fadeOut("slow", function(){
//     $(this).html("&mdash; <i>" + currentQuote[1] + "</i>").fadeIn("slow");
//   });
//
//   // update the tweet button
//   $("#tweet").attr({
//     href: "https://twitter.com/home/?status=" + currentQuote[0].replace(/\n/g, " ").replace(/\s\s/g, " ") + "-" + currentQuote[1]
//   });
//
//   // update the email button
//   $("#email").attr({
//     href: ("mailto:?subject=Check out this cool quote I found!&body="+currentQuote[0].replace(/\s/g, "%20") +"%0A-%20"+currentQuote[1])
//   })
// }
//
// // called on page load. Fetches the WikiQuote page and extracts the neccessary data from the Ajax request. Later calls the parseQuotes() to convert the data into a JavaScript array of quotes for easier handling later on.
// function fetchQuotes(){
//   $.ajax({
//         type: "GET",
//         url: "https://en.wikiquote.org/w/api.php?action=query&prop=extracts&format=json&exsectionformat=plain&titles=Wikiquote%3AQuote%20of%20the%20Day&callback=?",
//         contentType: "application/json; charset=utf-8",
//         async: false,
//         dataType: "json",
//         success: function (data, textStatus, jqXHR) {
//           html = $(data["query"]["pages"]["28713"]["extract"]);
//           console.log(html);
//           parseQuotes();
//           newRandomQuote();
//         },
//         error: function (errorMessage) {
//           alert("Failed to load the quotes. Please refresh the page or contact the author if the problem keeps occurring.");
//         }
//     });
// }
//
// // fetches all the <li> tags from the extract, because that's where the quotes are stored in, splits the text into 'quote' and 'author' and pushes those into the quoteList array which is later used to access a random quote.
// // short (optional) = true, if you only want to include short quotes (up to 130 characters long)
// function parseQuotes(short) {
//   if (html !== "" || html !== null || html !== undefined) {
//     var liList = html.find("li");
//     $.each(liList, function(key, element){
//       var qString = element.innerText.split("~");
//       if (short !== true || qString[0].split("").length <= 130)
//         quoteList.push([qString[0], qString[1]]);
//     })
//   }
// }
//
// // On document ready. Attaches the neccessary button functionality across the page.
// $(document).ready(function(){
//
//   fetchQuotes();
//
//   $("#newQuoteBtn").click(function(){
//     newRandomQuote();
//   })
//
//   $("#shortQuotes").change(function(){
//     quoteList = [];
//     if ($(this).is(":checked")) {
//       parseQuotes(true);
//     } else {
//       parseQuotes();
//     }
//   })
//
// })
//
//


var button = document.querySelector('.menu-icon');

$('.menu-icon').click(function(){
  if($(this).attr('class').indexOf('open')==-1)
  {
    $('.sidebar').addClass('active');
    $(this).addClass("open");
  }
    else{
     $('.sidebar').removeClass('active');
     $(this).removeClass("open");}



});
// button
