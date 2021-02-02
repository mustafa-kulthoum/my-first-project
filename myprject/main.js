/* global console,alert,prompt*/
var mymassege = [
    "msg1",
    "msg2",
    "msg4",
    "msg6",
    "msg3",
    "msg5"
],
    
    mystring = "i love java script and json",
    mycode = String.fromCharCode(77,85,83,84,65,70,65),
    myslice = mystring.slice(-3,-1);
if(Array.isArray(mymassege))  {
        console.log(" cood");
} else {
     console.log("bad");
}
console.log(mymassege);
mymassege[6]="msg7";
console.log(mymassege);
mymassege[mymassege.length]="msg8";
console.log(mymassege);
mymassege.push("msg9");
console.log(mymassege);
mymassege.unshift("msg10");
console.log(mymassege);
console.log(mymassege.pop());
console.log(myslice);
console.log(mycode);
