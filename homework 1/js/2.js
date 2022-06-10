function ans(s,a,b){
    // console.log(s,a,b);
    var left = 0;
    var count = 0;
    var right = s-1;
    while(left<s&& right>=0){
        if(a[left]==b[right]){
            count++;
            left++;
            right--;
        }else if(a[left]<b[right]){
            left++;
        }else{
            right--;
        }
    }
    console.log(count);
}
function runProgram(input) {
input = input.trim().split("\n");
var tc = +input[0];
  var line = 1;
  for(var i = 0; i<tc; i++){
      var size = +input[line];
      line++;
      var arr1 = input[line].trim().split(" ").map(Number);
      line++;
      var arr2 = input[line].trim().split(" ")
      .map(Number);
        line++;
      ans(size,arr1,arr2);
    
  }
    
}

if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }

