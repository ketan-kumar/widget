let count = 1;
export function couponFunction() {
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
export function handleButton() {
  console.log('Entered here --------');
  const allInput = document.getElementsByTagName('input');
  // console.log(allInput, "Input tags --------");
  console.log(document.getElementById('name').value)
  console.log(document.getElementById('email').value)
}
export function myFunc() {
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

export const couponDetails = async () => {
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
export const closeFunc = () => {
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

export function couponCodeFunc(){
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
export function myFunc1(){
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