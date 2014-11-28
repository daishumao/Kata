function parseTable(tableData, startline, lineNum) {
	var lines;
	lines = tableData.trim().split(/\n/);
	lines = lines.splice(startline, lineNum);
	lines = lines.map(function(line){
		line = line.trim().split(/\s+/);
		return line;
	});
	return lines;
}
function findMinSpread(data, col1, col2) {
	var i;
	var l;
	var mSpread = 1000;
	var result;
	for (i = 0, l = data.length; i < l; i++) {
		spread = Math.abs(data[i][col1] - data[i][col2]);
		if (spread < mSpread) {
			mSpread = spread;
			result = data[i][0];
		}
	}
	return result;
}
exports.parseTable = parseTable;
exports.findMinSpread = findMinSpread;
