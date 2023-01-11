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
  padding-top: 0.8em;
}
.input-container input {
  border: none;
  background: #FAFAFA;
  border-radius: 5px;
  font-size: 12px;
  padding-left: 4em;
  padding-top: 1em !important;
  padding-bottom: 1em !important;
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
.coupon-tab1 svg {
  position: absolute;
  padding-top: 12.5px;
  padding-left: 12.5px;
}
.coupon-tab1 input {
  width: 95%;
  border: none;
  background: #FAFAFA;
  padding-left: 3.5em;
  padding-bottom: 13.5px;
  padding-top: 13.5px;
  font-size: 12px;
  font-family: 'Helvetica';
}
.coupon-tab2 {
  flex: 12%;
}
.coupon-tab2 button {
  padding: 14.5px;
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
  <svg height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
     viewBox="0 0 60.671 60.671" xml:space="preserve">
  <g>
    <g>
      <ellipse style="fill:#010002;" cx="30.336" cy="12.097" rx="11.997" ry="12.097"/>
      <path style="fill:#010002;" d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9
        C48.354,35.818,42.661,30.079,35.64,30.079z"/>
    </g>
  </g>
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
  console.log('element -------------', ele);
};