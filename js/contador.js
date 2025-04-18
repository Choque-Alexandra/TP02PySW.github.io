$(document).ready(function () {
    let start = 95;
    const end = 198;
    const duration = 11000; // en milisegundos
    const intervalTime = 500; // cada cuánto se actualiza (ms)
    const increment = (end - start) / (duration / intervalTime);
  
    const counterInterval = setInterval(function () {
      start += increment;
      if (start >= end) {
        $('#counter').text(end);
        clearInterval(counterInterval);
      } else {
        $('#counter').text(Math.floor(start));
      }
    }, intervalTime);
  });
  