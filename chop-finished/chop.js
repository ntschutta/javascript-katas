function chop(findMe, arrayOfInts) {
  var startIndex  = 0,
  stopIndex = arrayOfInts.length - 1,
  middle = Math.floor((stopIndex + startIndex)/2);
  while(arrayOfInts[middle] !== findMe && startIndex < stopIndex){
    if (findMe < arrayOfInts[middle]){
      stopIndex = middle - 1;
    } else if (findMe > arrayOfInts[middle]){
      startIndex = middle + 1;
    }
    middle = Math.floor((stopIndex + startIndex)/2);
  }
  return (arrayOfInts[middle] === findMe) ? middle : -1;
}
if (typeof exports !== 'undefined') {
   exports.chop = chop;
}
