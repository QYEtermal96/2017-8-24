
function leftpad(string,number,str) {
    var result = ""
    for(var i = 0; i < number - string.length;i++ ){
        result += str
    }
    console.log(result.concat(string));
}
leftpad("hello",20,"1");