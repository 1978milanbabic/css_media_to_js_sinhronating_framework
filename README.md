IN PROGRESS!!!

Working example:

JS:

jQuery(document).ready(function($){
    
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
    
    
});

HTML:
#
<div id="conn"></div>
#
CSS:

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
