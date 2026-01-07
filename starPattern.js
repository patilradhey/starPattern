// 1) print ****

// let line = []
// for (i=1; i<=4; i++){
//     line = line + "*"
// }
// console.log(line)

// 2) print a square of asterisks

// for(i=1; i<=4;i++){
//     let line = " "
//     for(j=1; j<=4;j++){
//         line = line + "*"
//     }
//     console.log(line)
// }

// 3) print a right angle triangle 

// for(i=1; i<=5;i++){
//     let line = " "

//     for(j=1; j<=i;j++){
//         line = line + "*"
//     }
//     console.log(line)
// }

// 4) print reverse right angle triangle 

// for(i=1; i<=5;i++){
//     let line = " "

//     for(j=5; j>=i;j--){
//         line = line + "*"
//     }
//     console.log(line)
// }

// 5) print a pyramid 

// for(i =1; i<=4;i++){
//     let line = " "

//     for(j=1; j<=4+i-1;j++){
//         if(j<=4 - i){
//             line = line + " "
//         }else{
//             line = line + "*"
//         }
//     }
//     console.log(line)
// }

// 6) print pyramid

// Upper half (including middle)
//   for ( i = 1; i <= 5; i++) {
//      spaces = " ".repeat(5 - i);
//      stars = "* ".repeat(i);
//     console.log(spaces + stars);
//   }

//   Lower half
//   for ( i = 5 - 1; i >= 1; i--) {
//      spaces = " ".repeat(5 - i);
//      stars = "* ".repeat(i);
//     console.log(spaces + stars);
//   }

// 7) Number pyramid
//   for ( i = 1; i <= 4; i++) {
//     console.log(String(i).repeat(2 * i - 1));
//   }

// 8) Pascals Triangle 

// for ( i = 0; i <= 4; i++) {
//      num = 1;
//      row = "";

//     for ( j = 0; j <= i; j++) {
//       row += num + " ";
//       num = num * (i - j) / (j + 1);
//     }

//     console.log(row);
//   }

// 9) Hollow Square 

// for ( i = 1; i <= 5; i++) {
//      row = "";

//     for ( j = 1; j <= 5; j++) {
//       if (i === 1 || i === 5 || j === 1 || j === 5) {
//         row += "* ";
//       } else {
//         row += "  ";
//       }
//     }
//     console.log(row);
//   }

// 10) hourglass pattern
// Upper half
//   for ( i = 4; i >= 1; i--) {
//      spaces = " ".repeat(4 - i);
//      stars = "* ".repeat(2 * i - 1);
//     console.log(spaces + stars);
//   }

//   // Lower half
//   for ( i = 2; i <= 4; i++) {
//      spaces = " ".repeat(4 - i);
//      stars = "* ".repeat(2 * i - 1);
//     console.log(spaces + stars);
//   }

// 11) Zig Zag Pattern 

for ( i = 1; i <= 5; i++) {
     row = "";

    for ( j = 1; j <= 5; j++) {
      if (j === i || j === 5 - i + 1) {
        row += "* ";
      } else {
        row += "  ";
      }
    }

    console.log(row);
  }