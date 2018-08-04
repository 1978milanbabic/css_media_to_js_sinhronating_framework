/**
 * Css media to javascript synchronizer
 * Copyright 2018 Milan Babic
 * Licensed under: SEE LICENSE IN https://github.com/1978milanbabic/css_media_to_js_synchronizer/blob/master/LICENSE
 */
/**
 * Css Media to JS Synchronizer
 * @version 1.0.0
 * @author Milan Babic
 */

(function () {
    //export/initiate function
    window.csstojsID = function (cssid) {
        return new Factory(cssid);
    };

    function Factory(cssid) {
        //creating logic array - for the sizes that is going to be used
        this.already = [];

        var elem = document.getElementById(cssid);
        this.DOMObj = elem;

        this.init = function () {

            var cssSize = parseInt(this.DOMObj.offsetWidth);

            if (this.already[cssSize - 1] === false) {
                //executes user method for size (if not already executed/only if size is changed)
                this.sizes["size"+cssSize]();
                //all "alerady size" logic to false
                var i;
                for (i = 0; i < this.already.length; i++) {
                    if (i != (cssSize - 1)){
                        this.already[i] = false;
                    }else{
                        this.already[i] = true;
                    }
                    
                }
            }

        };

        //adds event listener on resize
        var t = this;
        window.addEventListener("resize", function () {
            t.init();
        });
    }
    
    Factory.prototype.sizes = {};
    
    Factory.prototype.size = function (n, fn) {
        //user creates methods for sizes
        Factory.prototype.sizes["size"+n] = fn;
        //creates logic for size
        this.already[n - 1] = false;
    };


}());
