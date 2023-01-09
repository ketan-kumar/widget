document.getElementById('gmi-widget-form').innerHTML = `<div id="gmi-registration-widget">
        <p id="heading-text">Registrati</p>
        <p id="sub-heading">Inizia ora la prova gratuita</p>
        <form name="form1" action="#" onsubmit="submit()">
        <div class="input-container">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.9375 15.875C1.9375 15.875 0.625 15.875 0.625 14.5625C0.625 13.25 1.9375 9.3125 8.5 9.3125C15.0625 9.3125 16.375 13.25 16.375 14.5625C16.375 15.875 15.0625 15.875 15.0625 15.875H1.9375ZM8.5 8C9.54429 8 10.5458 7.58516 11.2842 6.84673C12.0227 6.10831 12.4375 5.10679 12.4375 4.0625C12.4375 3.01821 12.0227 2.01669 11.2842 1.27827C10.5458 0.539843 9.54429 0.125 8.5 0.125C7.45571 0.125 6.45419 0.539843 5.71577 1.27827C4.97734 2.01669 4.5625 3.01821 4.5625 4.0625C4.5625 5.10679 4.97734 6.10831 5.71577 6.84673C6.45419 7.58516 7.45571 8 8.5 8Z" fill="#CCCCCC"/>
        </svg>                
        <input type="text" placeholder="Nome & cognome" id="name" onKeyup = "myFunc()" />
        </div>
        <div class="input-container">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 10.5V1.5C18 0.67 17.33 0 16.5 0H2.48999C1.65999 0 0.98999 0.67 0.98999 1.5V10.5C0.98999 11.33 1.65999 12 2.48999 12H16.5C17.33 12 18 11.33 18 10.5ZM16.69 1.39C17.02 1.72 16.84 2.06 16.66 2.23L12.6 5.95L16.5 10.01C16.62 10.15 16.7 10.37 16.56 10.52C16.43 10.68 16.13 10.67 16 10.57L11.63 6.84L9.48999 8.79L7.35999 6.84L2.98999 10.57C2.85999 10.67 2.55999 10.68 2.42999 10.52C2.28999 10.37 2.36999 10.15 2.48999 10.01L6.38999 5.95L2.32999 2.23C2.14999 2.06 1.96999 1.72 2.29999 1.39C2.62999 1.06 2.96999 1.22 3.24999 1.46L9.48999 6.5L15.74 1.46C16.02 1.22 16.36 1.06 16.69 1.39Z" fill="#CCCCCC"/>
        </svg>                
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

let count = 1;
function couponFunction() {
  console.log('entered ------------')
  count++;
  if (count % 2 === 0) {
    console.log('entered here !!!!!!!!!')
    document.getElementById('coupon-tab').innerHTML = `<div style="display:flex;"><div class="coupon-tab1" >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 14V2C16 0.893333 15.3698 0 14.5891 0H1.41093C0.630218 0 0 0.893333 0 2V14C0 15.1067 0.630218 16 1.41093 16H14.5891C15.3698 16 16 15.1067 16 14Z" fill="#CCCCCC"/>
            </svg>
            <input type='text' name='coupon' id='coupon' onKeyup="myFunc1()"></div>
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
  console.log(data1,'data 1 value -----------')
}
