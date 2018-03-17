$('.submit-button').off('submit').on('submit', function(event) {
  event.preventDefault();

  trainName = $("#train-name").val().trim();
  destination = $("#destination").val().trim();
  trainTime = $("#train-time").val().trim();
  frequency = $("#frequency").val().trim();

    $("#train-name").val("");
    $("#destination").val("");
    $("#train-time").val("");
    $("#frequency").val("");

  firebase.ref().push({

    "name":trainName,
    "destination":destination,
    "time":trainTime,
    "frequency":frequency

  });

});

firebase.ref().on('child_added', function(snapshot){
  let trainData = snapshot.val();
  let newRow = $('<tr>');
  let newName = $('<td>').text(trainData.name);
  let newDestination = $('<td>').text(trainData.destination);
  let newTime = $('<td>').text(trainData.time);
  let newFrequency = $('<td>').text(trainData.frequency);
  let newNextArrival = $('<td>').text();
  let newMinutesAway = $('<td>').text();

  newRow.append(newName)
        .append(newDestination)
        .append(newTime)
        .append(newFrequency)
        .append(newNextArrival)
        .append(newMinutesAway);

    $('tbody').append(newRow);

});