function BinarySearch(data, target, callBack) {
	if(data instanceof Array && callBack instanceof Function)
		return callBack(searchbyIndex(0, data.length - 1));
	else
		throw new Error("Invalid arguments");

	function searchbyIndex(start, end) {
		if(start <= end)
			return divideSearchDomains(start, end);
		else
			throw new RangeError("Target not found");
	}

	function divideSearchDomains(start, end) {
		var middle = Math.floor(end + start / 2);
		var value = data[middle];

		if(target < value)
			return searchbyIndex(start, middle - 1);
		if(target > value)
			return searchbyIndex(middle + 1, end);

		return middle;
	}
}

module.exports = BinarySearch;