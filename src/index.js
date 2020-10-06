module.exports = function toReadable(number) {

	const numberArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const numberDecArray = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	let dec = number % 100;
	let rez = '';
	if (Math.trunc(number / 100)) {
		rez = numberArray[Math.trunc(number / 100)] + ' hundred '; console.log(rez);
	};
	if (rez !== '' && dec === 0) { return rez.trim() };
	if (dec < 20) { rez = rez + numberArray[dec] }
	else { rez = rez + numberDecArray[Math.trunc(dec / 10) - 1] + ' ' + ((dec % 10) ? numberArray[dec % 10] : '') };
	return rez.trim();



}
