var katzDeli = [];
var katzDeliLine = [];
var ticketNumber = 0;

ticketNumber++
takeANumber(katzDeliLine, ticketNumber++);
takeANumber(katzDeliLine, ticketNumber++);
takeANumber(katzDeliLine, ticketNumber++);


function takeANumber(currentLine, number){
  currentLine[currentLine.length] = number;
  return `Welcome ticket #${number}. You are number ${currentLine.length} in line.`;
}

function currentLine(currentLine){
  var lineMembers = "The line is currently: ";
  if (currentLine.length === 0) {return "The line is currently empty."}
  else
  for (var i = 0; i < currentLine.length; i++){
    lineMembers += `${i+1}. ${currentLine[i]}`;
    if (i < currentLine.length - 1) {lineMembers += ", "}
  }
  return lineMembers;
}

function nowServing(currentLine){
  var len = currentLine.length;
  if (len === 0) {return "There is nobody waiting to be served!"}
  else 
//  var firstPerson = currentLine.shift();
//  var announcement = `Currently serving ${firstPerson}.`;
  return `Currently serving ${currentLine.shift()}.`;
}