// import "./assets/square.png"
const stl = `body {
  margin: 10;
  padding: 0;
  box-sizing: border-box;
}
#gmi-registration-widget {
  display: block;
  border: 2px solid black;
  max-width: 400px;
  background-color: white;
  margin: auto;
  padding: 25px;
}
#heading-text {
  font-family: 'Helvetica';
  font-style: normal;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
}
#sub-heading {
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  text-align: center;
  font-size: 14px;
  color: #000000;
}
.input-container {
  margin-bottom: 14px;
  display: flex;
  flex-flow: column;
}
.input-container svg {
  position: absolute;
  padding-left: 1em;
  padding-top: 0.2em;
}
.input-container input {
  border: none;
  background: #FAFAFA;
  border-radius: 5px;
  font-size: 14px;
  padding-left: 4em;
  padding-top: 1.5em !important;
  padding-bottom: 1.5em !important;
}
.coupon-option {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 14px;
}
.coupon-option span {
  padding-left: 1em;
}
.button-container {
  display: flex;
  flex-flow: column;
  margin-bottom: 14px;
}
.button-container button {
  display: block;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 40px;
  color: #FFFFFF;
  border: none;
}
.coupon-tab-default {
  display: none;
}
.coupon-tab {
  display: flex;
  flex-direction: column !important;
  flex-flow: row;
  margin-bottom: 14px;
}
.coupon-tab1 {
  flex: 80%;
  display:flex;
  position:relative;
  align-items:center;

}
.coupon-tab1 > span {

    width: 30px;
    background-position: center;
    /* padding: 19px; */
    background-repeat: no-repeat;
    display: inline-block;
    background-image: url(https://gmi-dev-image.s3.eu-central-1.amazonaws.com/coupon/vodafone.png);
    background-size: cover;
    height: 27px;
    position:absolute;

}
.coupon-tab1 > svg {
  position: absolute;
  padding-top: 12.5px;
  padding-left: 1em;
}
.coupon-tab1 > input {
  width: 95%;
  border: none;
  background: #FAFAFA;
  padding-left: 3.5em;
  padding-bottom: 13.5px;
  padding-top: 13.5px;
  font-size: 14px;
  font-family: 'Helvetica';
}
.coupon-tab2 {
  flex: 12%;
}
.coupon-tab2 button {
  padding: 10.5px;
  width: 100%;
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  color: #FFFFFF;
}
a {
  text-decoration: none;
  color: #000000;
}
.hiding-content {
  display: none;
}
.coupon-image{
  position:absolute;
  width:25px;
  height:25px;
}
#email-msg p {
  font-family: 'Helvetica';
  font-style: normal;
  
}
#email-heading{
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
} 
#email-resubmit{
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
}
.email-login-msg{
  font-weight: 400;
  font-size: 12px;
  line-height: 40px;
}
`;
// font-style: normal;
// font-family: 'Helvetica';
let count = 1;
function couponFunction() {
  console.log('entered ------------')
  count++;
  if (count % 2 === 0) {
    console.log('entered here !!!!!!!!!')
    // <div class="input-container">
    // <svg width="16" height="16" viewBox="0 0 16 16" fill="red" xmlns="http://www.w3.org/2000/svg">
    // <path d="M16 14V2C16 0.893333 15.3698 0 14.5891 0H1.41093C0.630218 0 0 0.893333 0 2V14C0 15.1067 0.630218 16 1.41093 16H14.5891C15.3698 16 16 15.1067 16 14Z" fill="#CCCCCC"/>
    // </svg>
    // <input type="text" placeholder="Nome & cognome" id="name" onKeyup = "myFunc()" />
    // </div>
    document.getElementById('add-icon').innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM3 5C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H9C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5H3Z" fill="black"/>
    </svg>
    `;
    const url="/home/incaendo/work/gmi/widget/assets/square.png";
    console.log(typeof url,'type of url ---');
    // <span class="icon select-business-icon" style="background-image: url(${url});">&nbsp;</span> 
    document.getElementById('coupon-tab').innerHTML = `<div style="display:flex;">
    <div class="coupon-tab1" >
    <img src=${url}>
  <input type='text' name='coupon' id='coupon' onKeyup="myFunc1()" placeholder="coupon code">
    </div>

        <div class="coupon-tab2" onClick="couponDetails()"><button id=''add-button'>ADD</button></div></div><div id='coupon-resp' style="color:black; display:block"></div>`;
    document.getElementById('coupon-tab').style.marginBottom = '14px';
  }
  if (count % 2 === 1) {
    console.log('entered here 11111111')
    document.getElementById('add-icon').innerHTML = `<svg id="add-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="16" height="16" fill="url(#pattern0)"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0_1502_59653" transform="scale(0.0111111)"/>
    </pattern>
    <image id="image0_1502_59653" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAEo0lEQVR4nO2dz29VRRTHP9BqnylBDC6gNQFEyw4JWzGSAm7FBZgI7ERN0Kgx4NbEjYkb0oS/wD/ARBcYCbpwgTEYqGyABRjDD5UfrQqxD/taF+dhzPNePPP73ul8kpOXNHPfnPlm3tyZc2amUCgUCoVCoVAoFAoNZVlqByoYArYCm4FNwATwJDAKPNb/BLgLzPQ/LwEXgIvANHAG6EX1uiU8AbwDfA78Biw62izwGfA2MB6xHY3kEeAAcALpfa7i1tk88CWwH+hEaVlDWIH0tKuEE7fOfgU+AB4N3sqEPAQcBm4RX+BBuwW81/cpK54DzpFe4EE7D+wM2O5odIBjwALpRa2zBWAKGAmkQXDWA9+SXkitfQ88FUSJgOzEzzQtts0CkwH0CMJLwJ+kF83WusDL3lXxzGuEnRPHsh5w0LM23tiNLA5Si+RT7L1eFfLAJDBHenF8Wxd4waNOTjxNO198WpsFNnpTy5IRZFqUWozQdprE8+xjFU6Fsi6yhF/btyP9v8Wqf8qTZsY8T9wV35EKH96PWP8CsM1aLUuGkQB7rEYuIr14kDWRfThH5EDU4QCN+D+rI7Yf7xqrZckK4GaEBjVV6Jt9DYxYbvoAcAhYbfFcLqwGXg9dSQe4Rvxe1KQevQhcR1Jxakx79F6qX0pLjTVI8EyNqdAHDMvnTDAtxkkbNKojlT89DLYymPToPcjmloKwHIPhw0ToHea+ZI86G6PdEjaEzB9XWbnjhzpfHzSshGYWeBzF9jNtj95KWpGbyipgi6agVuhn7H3Jns2aQlqhJxwcyR2VNlqhNzk4kjsqbbRCr3dwJHc2aApphV7p4Mg9JGg/hswcbK0Ol+8cQ5IH9xza53VnqktYtCoz0jRcMjU3fDrikptrQxDKJVMzp6nAJh5tShPPyQwSPLSgFfoPhzraEPFz8dFFm/9wGfufVhcZA8d8OuSJ+y9Dl6Hxkk+HYme8q6yO1H6d0QioHTp+VJZbilzWFNIKfcHBkdxRaVOEdser0D84OJI7Km1K4N8N74H/HvCNi0eZ8jXKw/0mK8OTdr5kjVoTk+XxGPAT6TLhTRs6esitDD9rCpv06GvAVzYeZcoJlCKDeVDpE8PyORNUiw5prn9o2hI8+CbHOeCo4TM58jFyOjgoo0hWYan26Ggb0e8CH1k8lwsfAndiVTYMnCVuT6qKZ49H9sH6sJBtKmseeIsH/6R9U5UFiZm9WQTeAP6KWOc/TBGvN/07U+MjM2JqSScBI8jx3Zg/3xT2HfCwJ82s2YhEsVKLEcpmUO5GisF22n3rTJ11gV0edfLCi+R3Mcoerwp55CB5XPUzD7zqWRvv7Kbdw8gcDbzip45J2vmCnEHeN61iHXCK9OJp7TQNuNLHlhFkUdP0KzOP0oB5sg+20YxtZYM2DTwbsN1JGEYuFUkRYh20G8gd1sNBW5yYUaSRV4gv8C/IRd0uR0VaRwfYB3xB2IXOPHAceIUldvV8FWuBN4FPgdu4i3u7/12HkGMTyWnisYch5KTuFuSw5AQS1FmJbEm7n0a6g8zVf0e2zl5ENhxO9638e5BCoVAoFAqFQqFQ0PA32oAL4Nvgw4gAAAAASUVORK5CYII="/>
    </defs>
    </svg>`;
    document.getElementById('coupon-tab').innerHTML = ``;
    document.getElementById('coupon-tab').style.marginBottom = '0px';
  }
}
async function handleButton() {
  console.log('Entered here --------');
  let campaign = '';
  const params = window.location.search.substr(1).split('&');
  for (const param of params) {
    const splitParam = param.split('=');
    if (typeof splitParam[0] !== 'undefined' &&
      splitParam[0] === 'utm_campaign' && typeof splitParam[1] !== 'undefined') {
      campaign = splitParam[1];
    }
  }
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const surname = document.getElementById('surname').value;
  let apiResp; 
  console.log(document.getElementById('name').value)
  console.log(document.getElementById('email').value)
    const userData ={
        'action':'signup',
        'email' : email,
        'nicename' : name,
        'surName': surname,
        'campaign': campaign
    }
    const response = await fetch("https://api.dev.goodmorningitalia.it/auth", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    }).then(res => res.json()).then(result => {
     apiResp = result.msg;
      console.log(result ,'result ------')
    });
    if(apiResp.toLowerCase() === "success"){
      document.getElementById('gmi-registration-widget').innerHTML = `<div id="email-msg"><p id='email-heading'>Controlla la tua email</p>
      <p id="email-resubmit">Completa la registrazione verificando il tuo profilo dalla email che ti abbiamo inviato a  <b>youremail@gmail.com</b>.</p>
      <p class="email-login-msg">Non hai ricevuto l’email? Inviala di nuovo o Aggiorna il tuo indirizzo email</p>
      <p class="email-login-msg">Sei già registrato? Fai il login qui</p>
      </div>`
    }
}
function ValidateEmail(input) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}
function emailFunc(){
  const name = document.getElementById('name').value;
  const inputEmail = document.getElementById('email').value;
  const email = ValidateEmail(inputEmail);
  console.log(email,'valid email');
  console.log(name.length, email.length, 'name and email --------');
  if (name.length & inputEmail.length & email) {
    console.log('Entered here -------')
    const elem = document.getElementById('free-trial')
    document.getElementById('free-trial').style.backgroundColor = 'black';
  }
  if(inputEmail === ''){
    document.getElementById('hiding-email-msg').style.display = 'block';
  }
  if(inputEmail.length){
    document.getElementById('hiding-email-msg').style.display = 'none';
  }
  if(!email){
    document.getElementById('hiding-email-msg').innerHTML = `* please enter valid email address`;
    document.getElementById('hiding-email-msg').style.display = 'block';

  }
  if(email){
    document.getElementById('hiding-email-msg').style.display = 'none';

  }
  if (name === '' || inputEmail === '') {
    document.getElementById('free-trial').style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
  }
}
function myFunc() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  console.log(name.length, email.length, 'name and email --------');
  if (name.length & email.length) {
    console.log('Entered here -------')
    const elem = document.getElementById('free-trial')
    document.getElementById('free-trial').style.backgroundColor = 'black';
  }
  if(name === ''){
    document.getElementById('hiding-name-msg').style.display = 'block';
  }
  if(name.length){
    document.getElementById('hiding-name-msg').style.display = 'none';
  }
  if (name === '' || email === '') {
    document.getElementById('free-trial').style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
  }
  console.log(document.getElementById('name').value)
  console.log(document.getElementById('email').value)
}
// TESTTQRuwyac

const couponDetails = async () => {
  const couponCode = document.getElementById('coupon').value;
  console.log(couponCode,'coupon code -----')
  const response = await fetch('http://localhost:4030/coupon-types?$limit=50');
  const myJson = await response.json(); //extract JSON from the http response
  const coupon = myJson.data;
  console.log(myJson, 'Json value ------');
  console.log(coupon, 'Coupon --------');
  const couponPrefix = couponCode.substring(0, 4);
  let couponType = coupon.find((coupon) => coupon.prefix.toLowerCase() === couponPrefix.toLowerCase());
  const imageUrl = couponType.metadata.logo_uri;
  console.log(typeof imageUrl, 'type of imageurl ----')
  if(couponCode.length !== 0){
    // <img src=${imageUrl} alt="logo-image" id="coupon-image">
  document.getElementById('coupon-tab').innerHTML = `<div style="display:flex;"><div class="coupon-tab1" >
  <span class="icon select-business-icon" style="background-image: url(${imageUrl});">&nbsp;</span> 
            <input type='text' name='coupon' id='coupon' value=${couponCode} onKeyup=couponCodeFunc()></div>
        <div class="coupon-tab2" onClick="couponDetails()"><button id='add-button1'>ADD</button></div></div><div id='coupon-resp' style="color:black; display:block"></div>`;
  document.getElementById('coupon-resp').innerHTML = `<div id='close-tab' style="display:flex;justify-content: space-between;">
  <div style="padding-top:1em;"><b>${couponType.short_description}</b></div>
  <div id='close-icon' onClick='closeFunc()'><?xml version="1.0" ?><svg height="48" viewBox="0 0 48 48" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/><path d="M0 0h48v48h-48z" fill="none"/></svg></div>
  </div>`;
  }

}
const closeFunc = () => {
  console.log('Entered in close function-------');
  const couponCode = document.getElementById('coupon').value;
  console.log(couponCode,'coupon code -----')
  document.getElementById('close-tab').style.display = 'none';
  document.getElementById('coupon-tab').innerHTML = `<div style="display:flex;"><div class="coupon-tab1" >
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 14V2C16 0.893333 15.3698 0 14.5891 0H1.41093C0.630218 0 0 0.893333 0 2V14C0 15.1067 0.630218 16 1.41093 16H14.5891C15.3698 16 16 15.1067 16 14Z" fill="#CCCCCC"/>
      </svg>
  <input type='text' name='coupon' id='coupon' value=${couponCode}></div>
<div class="coupon-tab2" onClick="couponDetails()"><button>ADD</button></div></div><div id='coupon-resp' style="color:black; display:block"></div>`;
// document.getElementById('coupon-tab').style.marginBottom = '14px';
  
}

function couponCodeFunc(){
  const couponCodeValue = document.getElementById('coupon').value;
  console.log(couponCodeValue.length,'coupon code -----');
  if(couponCodeValue.length === 0){
    document.getElementById('default-coupon').innerHTML = ` 
    <span class="icon select-business-icon" style="background-image: url("./assets/square.png");">&nbsp;</span> 
    
   `;
    document.getElementById('coupon-resp').style.display = 'none'; 
  }
  else{
      document.getElementById('add-button1').style.backgroundColor = 'black';
    console.log('Entered in button function ')
  }
}
function myFunc1(){
  console.log("Entered in button function --------");
  const data1 = document.getElementsByClassName('coupon-tab2');
  data1.innerHTML = `<button style="background-color:black;">ADD</button>`;
  // document.getElementById('add-button2').style.backgroundColor = 'black';
  console.log(data1,'data 1 value -----------')
  // setTimeout(() => {
  //   const data = document.getElementById('add-button1');
  //   console.log(data,'data ------')
    
  // }, 2000);
}
window.onload = (event) => {
  console.log('dom loaded =============', event);
  const window = event.target;
  const style = window.createElement('style');
  style.innerHTML = stl;
  window.head.appendChild(style); 
  const ele = window.getElementById('gmi-widget-form');
  ele.innerHTML = `<div id="gmi-registration-widget">
  <p id="heading-text">Registrati</p>
  <p id="sub-heading">Inizia ora la prova gratuita</p>
  <form name="form1" action="#" onsubmit="submit()">
  <div class="input-container">
  <?xml version="1.0" encoding="iso-8859-1"?>
  <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
  <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="35px" viewBox="0 0 24 24"><g data-name="Layer 2"><path fill="rgba(0, 0, 0, 0.2)" d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z" data-name="person"/></g></svg>                  
  <input type="text" placeholder="Nome" id="name" onKeyup = "myFunc()" />
  </div>
  <div id="hiding-name-msg" style="display:none;margin-bottom: 1em;
  color: red;">* please enter your name</div>
  <div class="input-container">
  <?xml version="1.0" encoding="iso-8859-1"?>
  <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
  <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="35px" viewBox="0 0 24 24"><g data-name="Layer 2"><path fill="rgba(0, 0, 0, 0.2)" d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z" data-name="person"/></g></svg>                  
  <input type="text" placeholder="cognome" id="surname" onKeyup = "myFunc()" />
  </div>
  <div class="input-container">
  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 10.5V1.5C18 0.67 17.33 0 16.5 0H2.48999C1.65999 0 0.98999 0.67 0.98999 1.5V10.5C0.98999 11.33 1.65999 12 2.48999 12H16.5C17.33 12 18 11.33 18 10.5ZM16.69 1.39C17.02 1.72 16.84 2.06 16.66 2.23L12.6 5.95L16.5 10.01C16.62 10.15 16.7 10.37 16.56 10.52C16.43 10.68 16.13 10.67 16 10.57L11.63 6.84L9.48999 8.79L7.35999 6.84L2.98999 10.57C2.85999 10.67 2.55999 10.68 2.42999 10.52C2.28999 10.37 2.36999 10.15 2.48999 10.01L6.38999 5.95L2.32999 2.23C2.14999 2.06 1.96999 1.72 2.29999 1.39C2.62999 1.06 2.96999 1.22 3.24999 1.46L9.48999 6.5L15.74 1.46C16.02 1.22 16.36 1.06 16.69 1.39Z" fill="#CCCCCC"/>
  </svg>                
  <input type="text" placeholder="Email" id="email" onKeyup="emailFunc()" />
  </div>
  <div id='hiding-email-msg' style="display:none;margin-bottom: 1em;
  color: red;">* please enter your email</div>
  </form>
  <div class="coupon-option" onClick="couponFunction()">
  <svg id="add-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="16" height="16" fill="url(#pattern0)"/>
  <defs>
  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
  <use xlink:href="#image0_1502_59653" transform="scale(0.0111111)"/>
  </pattern>
  <image id="image0_1502_59653" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAEo0lEQVR4nO2dz29VRRTHP9BqnylBDC6gNQFEyw4JWzGSAm7FBZgI7ERN0Kgx4NbEjYkb0oS/wD/ARBcYCbpwgTEYqGyABRjDD5UfrQqxD/taF+dhzPNePPP73ul8kpOXNHPfnPlm3tyZc2amUCgUCoVCoVAoFAoNZVlqByoYArYCm4FNwATwJDAKPNb/BLgLzPQ/LwEXgIvANHAG6EX1uiU8AbwDfA78Biw62izwGfA2MB6xHY3kEeAAcALpfa7i1tk88CWwH+hEaVlDWIH0tKuEE7fOfgU+AB4N3sqEPAQcBm4RX+BBuwW81/cpK54DzpFe4EE7D+wM2O5odIBjwALpRa2zBWAKGAmkQXDWA9+SXkitfQ88FUSJgOzEzzQtts0CkwH0CMJLwJ+kF83WusDL3lXxzGuEnRPHsh5w0LM23tiNLA5Si+RT7L1eFfLAJDBHenF8Wxd4waNOTjxNO198WpsFNnpTy5IRZFqUWozQdprE8+xjFU6Fsi6yhF/btyP9v8Wqf8qTZsY8T9wV35EKH96PWP8CsM1aLUuGkQB7rEYuIr14kDWRfThH5EDU4QCN+D+rI7Yf7xqrZckK4GaEBjVV6Jt9DYxYbvoAcAhYbfFcLqwGXg9dSQe4Rvxe1KQevQhcR1Jxakx79F6qX0pLjTVI8EyNqdAHDMvnTDAtxkkbNKojlT89DLYymPToPcjmloKwHIPhw0ToHea+ZI86G6PdEjaEzB9XWbnjhzpfHzSshGYWeBzF9jNtj95KWpGbyipgi6agVuhn7H3Jns2aQlqhJxwcyR2VNlqhNzk4kjsqbbRCr3dwJHc2aApphV7p4Mg9JGg/hswcbK0Ol+8cQ5IH9xza53VnqktYtCoz0jRcMjU3fDrikptrQxDKJVMzp6nAJh5tShPPyQwSPLSgFfoPhzraEPFz8dFFm/9wGfufVhcZA8d8OuSJ+y9Dl6Hxkk+HYme8q6yO1H6d0QioHTp+VJZbilzWFNIKfcHBkdxRaVOEdser0D84OJI7Km1K4N8N74H/HvCNi0eZ8jXKw/0mK8OTdr5kjVoTk+XxGPAT6TLhTRs6esitDD9rCpv06GvAVzYeZcoJlCKDeVDpE8PyORNUiw5prn9o2hI8+CbHOeCo4TM58jFyOjgoo0hWYan26Ggb0e8CH1k8lwsfAndiVTYMnCVuT6qKZ49H9sH6sJBtKmseeIsH/6R9U5UFiZm9WQTeAP6KWOc/TBGvN/07U+MjM2JqSScBI8jx3Zg/3xT2HfCwJ82s2YhEsVKLEcpmUO5GisF22n3rTJ11gV0edfLCi+R3Mcoerwp55CB5XPUzD7zqWRvv7Kbdw8gcDbzip45J2vmCnEHeN61iHXCK9OJp7TQNuNLHlhFkUdP0KzOP0oB5sg+20YxtZYM2DTwbsN1JGEYuFUkRYh20G8gd1sNBW5yYUaSRV4gv8C/IRd0uR0VaRwfYB3xB2IXOPHAceIUldvV8FWuBN4FPgdu4i3u7/12HkGMTyWnisYch5KTuFuSw5AQS1FmJbEm7n0a6g8zVf0e2zl5ENhxO9638e5BCoVAoFAqFQqFQ0PA32oAL4Nvgw4gAAAAASUVORK5CYII="/>
  </defs>
  </svg>
  <span> Aggiungi Coupon</span></div>
  <div id="coupon-tab" style="display:flex; flex-direction:column"> 

  </div>

  <div id="coupon-code">
  <div class="button-container" onclick="handleButton()"><button id='free-trial'>INIZIA ORA</button></div>
  <div>Sei già registrato? <a href='http://localhost:3000/login'><b>Fai il login qui</b></a></div>
  </div>`;
  console.log('element -------------', ele);
};