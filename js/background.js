
var elements = jQuery('.spent-time a, .hours:not(.hours.hours-int, .hours.hours-dec)');

elements.each(function(i, data) {
  var el_val = parseFloat(jQuery(data).text());
  var new_el = jQuery('<div></div>')
  	.addClass('human-time').attr('style','color: burlywood;')
	  .text(TimeEntry_Convert(el_val));
  jQuery(data).after(new_el);
});

/**
 * Format for time hh:mm
**/
function TimeEntry_Format(hours, minutes) {
  var strip = function(a, b, c) {
		for (; a.length < c;) a = b + a;
		return a
  };
  return strip(hours.toString(), "0", 2) + ":" + strip(minutes.toString(), "0", 2);
};

/**
* 	Convert from decimal time to human readable time.
**/
function TimeEntry_Convert (value) {
  var int_val = parseInt(value, 10),
      hours = Math.floor(int_val),
      minutes = Math.floor((value - hours) * 60);
  return TimeEntry_Format(hours, minutes);
};
