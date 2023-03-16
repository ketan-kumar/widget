# GoodMroningItalia Widget

#### It is a service that lets you allow to register with GoodMorningItalia, a news briefing platform.

## Table of Contents:
* [Installing container](#Installing)
* [Configuring](#Configuring)
* [Uses](#Uses)
* [Customising](#Customising)

## Installing
**Installing** this widget is just like adding a url to the script tag. We deliver this widget through CDN. Here is the steps how you can integrate this to any web page.

```js
<script src='https://cdn.jsdelivr.net/gh/GMI/widget@dfca24207b014dc9f75485ee08e02dd8c4e40675/widget-minify.js'></script>
```
Add this script tag in html page to load the widget container.

## Configuring

- **configuring** this widget is quite simple. Just put the container tag received with the GoodMorningItalia platform on the page you want this widget. Below is the snippet

```js
<div id='gmi-registration-widget' data-widgetid='6ce22786358f0ac6e36b72dec572291a'></div>
```
data-widgetid is identifier for your container tag and this is unique for every client register with GoodMorningItalia.

## Uses
Once you finish with the above steps, you'll see a full fledge widget poping up into container tag on the same page you configure it, like below.

![GoodMorningItalia Registration Widget](/assets/register.png)

## Customising
We provide the full control of customising this widget to hosts as per own individual needs. Here are the top most classes you can override to design.

- **gmi-widget-form** is applied on container tag. 
- **element-container** is applied on the elements like input fields.
- **coupon-option** is applied on coupon icon.
- **coupon-tab** is applied on coupon element.
- **coupon-tab1** is applied on the container of coupon input field.
- **coupon-tab2** is applied on coupon button.