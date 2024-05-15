let collapse = document.getElementById('nav-list')
let header = document.getElementById('header')

document.getElementById("collapse").addEventListener("click", function() {
console.log('clicked')
console.log(collapse.style.display)

if (collapse.style.opacity === "1") {
    collapse.style.opacity = '0'
    collapse.style.pointerEvents = 'none'
    // header.style.zIndex = '1000'

} else {
    collapse.style.opacity = '1'
    collapse.style.pointerEvents = 'all'
    header.style.zIndex = '2000'
}
})

// document.getElementById('nav-item').addEventListener("click", function() {
//             collapse.style.opacity = '0'
//             collapse.style.pointerEvents = 'none'                
// })

const navLinks = document.querySelectorAll('.nav-item')

if (window.innerWidth < 700) {
console.log(window.innerWidth)

navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        collapse.style.opacity = '0'
        collapse.style.pointerEvents = 'none'
    })
})
}

document.getElementById('submit-btn').addEventListener('click', function(event) {

  (function(){
      emailjs.init( 'a9fihE5pGDbBFLhaq');
  })();

  console.log('submitted')
  event.preventDefault();
  // collect form data

  var data = {
  name: document.getElementById('name').value,
  email: document.getElementById('email').value,
  phone: document.getElementById('phone').value,
  message: document.getElementById('message').value
  };

  // send the email
  emailjs.send('service_pt452wg', 'template_m8zp7kl', data ).then(function() {

      alert('Email sent successfully');
      document.getElementById('name').value = '',
      document.getElementById('email').value = '',
      document.getElementById('phone').value = '',
      document.getElementById('message').value = ''
      
  }).catch(function(error) {
      console.log(error.text);
  });
});