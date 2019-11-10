//工厂模式
function crbounce(pobj) {
    var obj = new Object();
    obj.width = pobj.width;
    obj.height = pobj.height;
    obj.content = pobj.content;
    obj.target = pobj.target;
    obj.fun = function() {
        var str = '<div class="active" style="width:' + this.width + ';height:' + this.height + '">' + this.content + '</div>';
        var target = document.getElementById(this.target);
        target.innerHTML = str
    };
    obj.crfun = function(obj2) {
        var str = '<div class="active" style="width:' + obj2.width + ';height:' + obj2.height + '">' + obj2.content + '</div>';
        var target = document.getElementById(obj2.target);
        target.innerHTML = str
    }
    return obj;
}