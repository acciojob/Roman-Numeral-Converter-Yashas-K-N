function convertToRoman(num) {
  	const obj = [
      ['M',1000], 
      ['D', 500], 
      ['C', 100], 
      ['L', 50], 
      ['X', 10], 
      ['V', 5], 
      ['I', 1]
    ];

  //your code here
	let roman = " ";
	for ( const of obj ){
		while(num >= obj[0][1] ){
			roman += obj[0][0];
			num -= obj[0][1];
		}
	}
	return roman;

}



// function convertToRoman(num) {
//     const obj = [
//         ['M', 1000],
//         ['D', 500],
//         ['C', 100],
//         ['L', 50],
//         ['X', 10],
//         ['V', 5],
//         ['I', 1]
//     ];

//     let roman = '';
//     for (const [symbol, value] of obj) {
//         while (num >= value) {
//             roman += symbol;
//             num -= value;
//         }
//     }
//     return roman;
// }

// // Example usage:
// console.log(convertToRoman(1987)); // Output: MCMLXXXVII

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
