// * display block
document.getElementById('call-history').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('history').style.display = 'block';
  document.getElementById('back-history').style.display = 'block';
  document.getElementById('call-history').style.display = 'none';
});

// * clear
document.getElementById('back-history')
  .addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('history').style.display = 'none';
    document.getElementById('back-history').style.display = 'none';
    document.getElementById('call-history').style.display = 'block';
  });
