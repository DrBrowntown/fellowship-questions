var sortByStrings = function(s,t) {
  
  var sortedString = ('');
  for ( var i = 0; i < t.length; ++i) {
    var checkIndexOfY = s.match(t[i]); 
    var checkIndexOfX = t.match(s[i]);

    var arrayObjects = (Object.values(checkIndexOfX))
    console.log(arrayObjects.sort())
  }
}

sortByStrings("weather", "therapyw");

//test