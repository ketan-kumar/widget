const stl = `body {
  margin: 10;
  padding: 0;
  box-sizing: border-box;
}
#gmi-registration-widget {
  display: block;
  border: 2px solid black;
  width: fit-content;
  background-color: #FAFAFA;
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
  padding-top: 1em;
}
.input-container input {
  border: none;
  background: #FAFAFA;
  border-radius: 5px;
  font-size: 14px;
  padding-left: 4em;
  padding-top: 2em !important;
  padding-bottom: 2em !important;
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
}`;
let count = 1;
function couponFunction() {
  console.log('entered ------------')
  count++;
  if (count % 2 === 0) {
    //   <div class="coupon-tab1" >
    //   <svg version="1.1" id="square-15" xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 15 15">
    //   <path d="M13,14H2c-0.5523,0-1-0.4477-1-1V2c0-0.5523,0.4477-1,1-1h11c0.5523,0,1,0.4477,1,1v11C14,13.5523,13.5523,14,13,14z"/>
    // </svg><input type='text' name='coupon' id='coupon' onKeyup="myFunc1()">
    //   </div>
    console.log('entered here !!!!!!!!!')
    document.getElementById('coupon-tab').innerHTML = `<div style="display:flex;">
    
    <div class="input-container">
    <?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="35px" viewBox="0 0 24 24"><g data-name="Layer 2"><path fill="rgba(0, 0, 0, 0.2)" d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z" data-name="person"/></g></svg>            
    <input type="text" placeholder="Nome & cognome" id="name" onKeyup = "myFunc()" />
    </div>

        <div class="coupon-tab2" onClick="couponDetails()"><button id=''add-button'>ADD</button></div></div><div id='coupon-resp' style="color:black; display:block"></div>`;
    document.getElementById('coupon-tab').style.marginBottom = '14px';
  }
  if (count % 2 === 1) {
    console.log('entered here 11111111')
    document.getElementById('coupon-tab').innerHTML = ``;
    document.getElementById('coupon-tab').style.marginBottom = '0px';
  }
}
function handleButton() {
  console.log('Entered here --------');
  const allInput = document.getElementsByTagName('input');
  // console.log(allInput, "Input tags --------");
  console.log(document.getElementById('name').value)
  console.log(document.getElementById('email').value)
}
function myFunc() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  console.log(name, email, 'name and email --------');
  if (name.length & email.length) {
    console.log('Entered here -------')
    const elem = document.getElementById('free-trial')
    document.getElementById('free-trial').style.backgroundColor = 'black';
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
  console.log(couponType, 'type of coupon ----')
  if(couponCode.length !== 0){
  document.getElementById('coupon-tab').innerHTML = `<div style="display:flex;"><div class="coupon-tab1" >
  <svg id='default-coupon' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.5891 16C18.7602 16 10.1471 11.6154 12.3159 8.05249L14.2445 4.8841C15.3927 2.99775 15.0065 1.76231 13.0053 2.69614C11.7292 3.29163 10.3232 3.25296 9.00032 2.77012L1.92643 0.188157C1.58541 0.063684 1.28497 -0.0517761 0.95755 0.105013C-0.20942 0.663826 0.802598 2.30097 2.01408 2.75528L4 3.5C6.40603 4.40226 7.29998 6.54571 5.88926 8.69348C3.77758 11.9084 0.908861 16 1.41093 16H14.5891Z" fill="#CCCCCC"/>
  </svg>
  
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
    document.getElementById('default-coupon').innerHTML = ` <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 14V2C16 0.893333 15.3698 0 14.5891 0H1.41093C0.630218 0 0 0.893333 0 2V14C0 15.1067 0.630218 16 1.41093 16H14.5891C15.3698 16 16 15.1067 16 14Z" fill="#CCCCCC"/>
    </svg>`;
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
  <input type="text" placeholder="Nome & cognome" id="name" onKeyup = "myFunc()" />
  </div>
  <div class="input-container">
  <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg width="40px" height="35px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path fill="rgba(0, 0, 0, 0.2)" d="M67,148.7c11,5.8,163.8,89.1,169.5,92.1c5.7,3,11.5,4.4,20.5,4.4c9,0,14.8-1.4,20.5-4.4c5.7-3,158.5-86.3,169.5-92.1   c4.1-2.1,11-5.9,12.5-10.2c2.6-7.6-0.2-10.5-11.3-10.5H257H65.8c-11.1,0-13.9,3-11.3,10.5C56,142.9,62.9,146.6,67,148.7z"/><path fill="rgba(0, 0, 0, 0.2)" d="M455.7,153.2c-8.2,4.2-81.8,56.6-130.5,88.1l82.2,92.5c2,2,2.9,4.4,1.8,5.6c-1.2,1.1-3.8,0.5-5.9-1.4l-98.6-83.2   c-14.9,9.6-25.4,16.2-27.2,17.2c-7.7,3.9-13.1,4.4-20.5,4.4c-7.4,0-12.8-0.5-20.5-4.4c-1.9-1-12.3-7.6-27.2-17.2l-98.6,83.2   c-2,2-4.7,2.6-5.9,1.4c-1.2-1.1-0.3-3.6,1.7-5.6l82.1-92.5c-48.7-31.5-123.1-83.9-131.3-88.1c-8.8-4.5-9.3,0.8-9.3,4.9   c0,4.1,0,205,0,205c0,9.3,13.7,20.9,23.5,20.9H257h185.5c9.8,0,21.5-11.7,21.5-20.9c0,0,0-201,0-205   C464,153.9,464.6,148.7,455.7,153.2z"/></g></svg>    
  <input type="text" placeholder="Email" id="email" onKeyup="myFunc()" />
  </div>
  </form>
  <div class="coupon-option" onClick="couponFunction()">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
  <div class="button-container" onClick="handleButton()"><button id='free-trial'>INIZIA ORA</button></div>
  <div>Sei già registrato? <a href='http://localhost:3000/login'><b>Fai il login qui</b></a></div>
  </div>`;
  console.log('element -------------', ele);
};