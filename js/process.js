
async function caller(event) {
  event.preventDefault();
  console.log("Form submission prevented. Email: " + document.querySelector("#email").value);
}



async function emailSenderSaver(event) {
  event.preventDefault();
  // var url = 'http://localhost:8888/HTTP/Tech/email-aggregator/index.php'
  var url = 'https://webdevelopercanada.website/HTTP/Tech/email-aggregator/index.php'

  const email = document.querySelector("#email").value
  $.ajax({
    url: url,
    data: { body: JSON.stringify({ "email": email }) },
    type: 'POST',
    success: function (json, textStatus, jqXHR) {
      // jQuery XMLHttpRequest
      console.log("\emailSenderSaver()->response: ", json, jqXHR.status)
      if(jqXHR.status === 200){
        const form = document.getElementsByTagName("form")
        form[0].innerHTML = `
        <h1>Thanks, your list has been sent.</h1>
        `
      }
    },
  })
  
}

