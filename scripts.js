let fileInput = document.getElementsByTagName('input')[0];
alert(fileInput.disabled);
fileInput.addEventListener('touchstart', function() { alert('tap'); fileInput.click(); });

alert(body.disabled);
alert(html.disabled);
