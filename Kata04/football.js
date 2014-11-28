var　fs = require('fs');
var myCommon = require('./common.js');
// fs.readFile("football.dat", "utf8", function(err, data) {
// 	var i;
// 	var l;
// 	var mSpread = 100;
// 	var spread;
// 	var result;
// 	if (err) throw err;
// 	lines = data.trim().split(/\n/);
// 	lines = lines.splice(1, 20);
// 	lines = lines.map(function(line){
// 		line = line.trim().split(/\s+/);
// 		return line;
// 	});
// 	for (i = 0, l = lines.length; i < l; i++) {
// 		spread = Math.abs(lines[i][6] - lines[i][8]);
// 		console.log(lines[i]);
// 		if (spread < mSpread) {
// 			mSpread = spread;
// 			result = lines[i][0];
// 		}
// 	}
// 	console.log("第" + result + "队。")
// });
fs.readFile("football.dat", "utf8", function(err, data) {
	var lines;
	if (err) throw err;
	lines = myCommon.parseTable(data, 1, 20);
	console.log("第" +  myCommon.findMinSpread(lines, 6 ,8) + "队。")
});
