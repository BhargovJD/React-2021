// This
// In javaScript this keyword generally refers to the global object.

console.log(this);

var obj = {
    name:"bjd",
    getName: function(){
        console.log(this.name);
    }
}
obj.getName();
// getName function is a property of the object obj , therefore, the this keyword will refer to the object , and hence the output will be “vivek”.