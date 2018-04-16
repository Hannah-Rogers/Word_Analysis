"use strict";

//count words in the textarea
function wordCount(text) {
  var textarea = $('#user-text').val();
  var words = textarea.split(" ").length;
  return words;
}

//count words without repeats in the textarea
function countUniqueWords(text) {
  var textarea = $('#user-text').val();
  var words = textarea.split(" ").length;
  var uniqueList = textarea.split(" ").filter(function(allItems,i,a){
    return i==a.indexOf(allItems);
});
  return uniqueList.length;
}

//calculate average word length
function averageWordLength(text) {
  var textarea = $('#user-text').val();
  var countWords = textarea.split(" ").length;
  var charCount = textarea.length;
  return charCount / countWords;
}

//dom traversla and manipulation
function reportOnText() {

//remove hidden class
  $('.js-text-report').removeClass('hidden');

  //display data in the dom
  $('.js-word-count').text(wordCount);
  $('.js-unique-word-count').text(countUniqueWords);
  $('.js-average-words').text(averageWordLength);
}


//event listener
function watchFormSubmission() {
  $('.js-text-form').submit(function(event){
    event.preventDefault();
    var userText = $(this).find('#user-text').val();
    reportOnText(userText);
  });
}

$(watchFormSubmission);
