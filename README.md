# Synchronizes browsers engine for css (media conditions) and JavaScript -IN PROGRESS!!!

### Description:
    Literarly creates blocking function in order to avoid nasty asynchronous effect (JS and css) of browser engine 
    (JavaScript waits for css media condition to change instead of using its own browser "module" and functionality).
    Applicable in many ways - from header display for different window.width-s (devices) - (drop menu vs full options display) 
    to any problematic resizeable display effect.

### Working example:

HTML:
```html
<div id="conn"></div>
```

CSS:
```css
#conn{
    width: 1px;
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    z-index: -4;
}

@media screen and (max-width: 768px){
    #conn{
        width: 2px;
    }
}

@media screen and (max-width: 640px){
    #conn {
        width: 3px;
    }
}
```

JS:
```javascript
//jQuery(document).ready(function($){   //-no jQuery needed, this is writen only to point to loading point
    
    var media = csstojsID("conn");
    
    media.size(1, function(){
        //custom function for size 1
        console.log("Hi from size 1");
    });
    
    media.size(2, function(){
        //custom function for size 2
        console.log("Hi from size 2");
    });
    
    media.size(3, function(){
        //custom function for size 3
        console.log("Hi from size 3");
    });
    
    media.init();
    
//});
```
