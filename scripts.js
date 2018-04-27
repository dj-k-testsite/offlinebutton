document.getElementById('log1').innerHTML = 'Script started'
try {
  let fileInput = document.getElementsByTagName('input')[0];
  alert(fileInput.disabled);
  fileInput.addEventListener('touchstart', function() { alert('tap'); fileInput.click(); });

  alert(document.getElementsByTagName('body')[0].disabled);
  alert(document.getElementsByTagName('html')[0].disabled);
} catch (e) {
  alert(e);
}
document.getElementById('log2').innerHTML = 'Script ended'
