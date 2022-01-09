const fun1 = ()=>{
    console.log("Fun 1")
}

const fun2 = ()=>{
    console.log("Fun 2")
}

const fun3 = ()=>{
    fun1();
    fun2();
}

fun3();

