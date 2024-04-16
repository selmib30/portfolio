function submitForm() {
  var objet = document.getElementById("mail_objet").value;
  var message = document.getElementById("mail_message").value;
  var destinataire = "selimb30@outlook.fr";
  var mailtoLink = "mailto:" + destinataire + "?subject=" + objet + "&body=" + message;
  window.location.href = mailtoLink;
}

  function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
  }

  var bannerTimer = setInterval(bannerSwitcher, 5000);

  $('nav .controls label').click(function() {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
  });

var lang = {
    "html": "avancé",
    "css": "avancé",
    "javascript": "intermédiaire",
    "php": "avancé",
    "wordpress": "intermédiaire",
    "bootstrap": "intermédiaire",
    "laravel": "débutant"
};
var multiply = 4;

$.each( lang, function( language, pourcent) {

        var delay = 700;

        setTimeout(function() {
            $('#'+language+'-pourcent').html(pourcent);
        },delay*multiply);

        multiply++;

    });