
async function caller(event) {
  event.preventDefault();
  console.log("Form submission prevented. Email: " + document.querySelector("#email").value);
}



async function emailSenderSaver() {
  // var url = 'http://localhost:8888/HTTP/Tech/email-aggregator/index.php'
  var url = 'https://webdevelopercanada.website/HTTP/Tech/email-aggregator/index.php'

  const email = document.querySelector("#email").value
  $.ajax({
    url: url,
    data: { body: JSON.stringify({ "email": email }) },
    type: 'POST',
    success: function (response) {
      console.log("\nemailSender()->response: ", response)
    },
  });
}

