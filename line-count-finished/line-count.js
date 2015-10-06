fs = require('fs');

var lineCount = 0;
fs.readFile('sample1.js', 'utf8', function (err,data) {
  if (err) {
    return -1;
  }
  var fileAsArray = data.split(/\r\n|\r|\n/);
  var arrayLength = fileAsArray.length;
  var nextLine = '';
  var stringStart = '';

  for (var i = 0; i < arrayLength; i++) {
    nextLine = fileAsArray[i];
    stringStart = nextLine.trim().substring(0, 2);
    console.log(stringStart);
    console.log(lineCount);
    if (isSingleLineComment(stringStart)) {
    } else if (isMultiLineComment(stringStart)){
      i + findCommentEnd(i, fileAsArray);
    } else {
      lineCount++;
    }
  }
  console.log('count: ' + lineCount);
});

function isSingleLineComment (line) {
  var result = false;
  if (line === '//') {
    result = true;
  }
  return result;
}

function isMultiLineComment (line) {
  var result = false;
  if (line === '/*') {
    result = true;
  }
  return result;
}

function findCommentEnd (currentIndex, fileArray) {
  var notFound = true;
  var skipCount = 1;
  while (notFound) {
    var currentLine = fileArray[currentIndex];
    currentLine.trim();
    var endOfLine = currentLine.length;
    var lineEnd = currentLine.substring(endOfLine - 2, endOfLine);
    if (lineEnd !== '*/') {
      skipCount++;
      currentIndex++;
    } else {
      notFound = false;
    }
  }
  return skipCount;
}
