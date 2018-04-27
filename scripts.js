try {
  let fileInput = document.getElementsByTagName('input')[0];
  document.getElementById('log1').innerHTML = fileInput.disabled;
  fileInput.addEventListener('touchstart', function() { alert('tap'); fileInput.click(); });

  document.getElementById('log2').innerHTML = fileInput;
} catch (e) {
  document.getElementById('log2').innerHTML = e;
}
