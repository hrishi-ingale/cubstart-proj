var songs = ["dirty dancer by Orion Sun", "As It Was by Harry Styles", "Bloom by bLAck pARty", "Happy by Pharallel Williams", "Say Yes by Michelle Williams feat. Beyoncé and Kelly Rowland", "Uptown Funk by Mark Ronson feat. Bruno Mars", "Don't Worry, Be Happy by Bobby McFerrin", "Can't Stop the Feeling! by Justin Timberlake", "Good Life by One Republic" ]

console.log(songs.length);


var button = $('.song');

button.on("click", printSong);

function printSong() {
  var randomDecimal = Math.random();
  var random = randomDecimal * songs.length;
  var final = Math.floor(random);
  console.log(final);
  console.log("song printed");
  var message = $('.message');
  message.text(songs[final]);
}

var buttonOne = $('.reset');
buttonOne.on ("click", clearQuote);

function clearQuote() {
  var message = $('.message');
  message.text('');
}

// 

var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", createNew);
$('.card-container').on("click", ".delete-btn", deleteItem);

function createNew() {
  var newName = $('.name').val();
  var newStartDate = $('.start-date').val();
  var newEndDate = $('.end-date').val();
  var newLessonsLearned = $('.lessonsLearned').val();

  var newPerson = {newName: newName, newStartDate: newStartDate, newEndDate: newEndDate, newLessonsLearned: newLessonsLearned };

  appendNewPerson(newPerson);
  clearInputs();
}

function appendNewPerson(newPerson) {
  cardContainer.append(`
    <div class = "new-person-card">
      <h4 class = "name-tag"> Name: </h4> <p> ${newPerson.newName} </p>
      <h4 class = "end-tag"> Date: </h4> <p> ${newPerson.newEndDate} </p>
      <h4 class = "lessons-tag"> Thoughts: </h4> <p>${newPerson.newLessonsLearned}</p>
      <button class="delete-btn">Delete</button>
      </div>
      `);
}

function deleteItem(event){
  event.target.parentNode.remove();
}

function clearInputs(){
  $('.exes-name').val("");
  $('.end-date').val("");
  $('.lessonsLearned').val("");
}

