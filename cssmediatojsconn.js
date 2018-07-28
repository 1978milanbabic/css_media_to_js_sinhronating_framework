/* 
 * UNDER CONSTRUCTION! - WORKS BUT NEEDS ERROR LOGS!
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
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
                eval("this.size" + cssSize + "();");
                //all "alerady size" logic to false
                var i;
                for (i = 0; i < this.already.length; i++) {
                    this.already[i] = false;
                }
                //this size logic to true (executed)
                this.already[cssSize - 1] = true;
            }

        };

        //adds event listener on resize
        var t = this;
        window.addEventListener("resize", function () {
            t.init();
        });
    }

    Factory.prototype.log = function () {
        console.log(this);
    };

    Factory.prototype.size = function (n, fn) {
        //user creates methods for sizes
        eval("Factory.prototype.size" + n + " = " + fn);
        //creates logic for size
        this.already[n - 1] = false;
    };


}());