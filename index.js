var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")

}
/* sidemenu  */
var sidemeu = document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbyN1XFkQ0WZiFH1zUye6mL7g9enCheuNXMmY7uQqdqbxLV4myl_kdi1wc5az0_RKfAn4Q/exec'
  const form = document.forms['submit-to-google-sheet']

  const lastmsg = document.getElementById("lastmsg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {lastmsg.innerHTML = "Message sent sucessfully"
        setTimeout(function(){
            lastmsg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
