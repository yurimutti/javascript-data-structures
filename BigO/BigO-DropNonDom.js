function logItems(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }

  for (var k = 0; k < 0; k++) {
    console.log(k);
  }
}

logItems(10);
