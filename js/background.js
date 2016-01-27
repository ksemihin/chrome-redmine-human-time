

var hours_list = jQuery(document.body).find('td.spent-time');

hours_list.each(function(index, element) {
	var f_data = parseFloat(jQuery(element).text());

	$(element).after(fd(f_data));
});

function offset(a, b, c) {
		for (; a.length < c;) a = b + a;
		return a
};

/**
2.04
h= 2
m =
**/
function fd(num) {
	var b = parseInt(num, 10),
      hours = Math.floor(b),
      minutes = Math.floor((num - hours) * 60),
      f = offset(hours.toString(), "0", 2) + ":" + offset(minutes.toString(), "0", 2);
  return f;
};


function minTommss(minutes){
 var sign = minutes < 0 ? "-" : "";
 var min = Math.floor(Math.abs(minutes));
 var sec = Math.floor((Math.abs(minutes) * 60) % 60);
 return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
}
