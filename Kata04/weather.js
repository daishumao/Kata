// var　fs = require('fs');
// fs.readFile("weather.dat", "utf8", function(err, data) {
// 	var i;
// 	var mSpread = 100;
// 	var spread;
// 	var result;
// 	if (err) throw err;
// 	lines = data.trim().split(/\n/);
// 	lines = lines.splice(2, 30);
// 	lines = lines.map(function(line){
// 		line = line.trim().split(/\s+/);
// 		return line;
// 	});
// 	for (var i = 0; i < 30; i++) {
// 		spread = lines[i][1] - lines[i][2];
// 		console.log(spread);
// 		if (spread < mSpread) {
// 			mSpread = spread;
// 			result = lines[i][0];
// 		}
// 	}
// 	console.log("最小温差是第" + result + "天。" + "最小温差是" + mSpread );
// });

var　fs = require('fs');
var myCommon = require('./common.js');
fs.readFile("weather.dat", "utf8", function(err, data) {
	var lines;
	if (err) throw err;
	lines = myCommon.parseTable(data, 1, 20);
	console.log("最小温差是第" + myCommon.findMinSpread(lines, 1, 2) + "天。");
});
