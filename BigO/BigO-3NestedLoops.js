function logItems(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      for (var k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }
}

logItems(10);
