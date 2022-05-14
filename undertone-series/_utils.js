////////////////////////////////////////////////////////////////
function format_as_100K(number, dec)
{
	var n = number.toFixed(0);
	var s = n + "";
	var out = s;
	if (s.length > 3)
	{
		out = s.substr(0, s.length - 3) + "," + s.substr(s.length - 3, 1000);
	}
	if (dec === true)
	{
		var m = number - Math.floor(number);
		m = Math.floor(m * 100);
		if (m == 0) out = out + ".00";
		else if (m < 10) out = out + ".0" + m;
		else out = out + "." + m;
	}
	return out;
}

////////////////////////////////////////////////////////////////
function freq_to_note(f)
{
  var n = ( ( 12 * Math.log(f / 220.0) / Math.log(2.0) ) + 57.01 );
  return n;
}

////////////////////////////////////////////////////////////////
function note_to_freq(note)
{
	var f = 440.0 * Math.pow(2.0, (note - 69.0) / 12.0);
	return f;
}

////////////////////////////////////////////////////////////////
function note_to_name(note)
{
	note = Math.floor(note + 0.5);
	n = Math.floor(note + 12) % 12;
	o = Math.floor(note / 12 - 1);
	var names = [ "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B" ];
	return names[Math.floor(n)] + Math.floor(o);
}

////////////////////////////////////////////////////////////////
function single_hex_color(c)
{
	if (c <= 0) return "00";
	if (c >= 255) return "ff";
	
	c = Math.floor(c);
	var out = c . toString(16);
	if (out.length < 2) out = "0" + out;
	return out;
}

////////////////////////////////////////////////////////////////
// r, g, b between 0 and 1
function hex_color(r, g, b)
{
	return "#" + single_hex_color(r * 255) + single_hex_color(g * 255) + single_hex_color(b * 255);
}

////////////////////////////////////////////////////////////////
function get_ct(note)
{
	var ct = Math.floor((note - Math.floor(note + 0.5)) * 100.0 - 0.5);
	if (ct < 0) return "-" + (-ct);
	else return "+" + ct;
}

////////////////////////////////////////////////////////////////
// Returns:
// [ x, y ]
// x = 0 for C4 (note 12)
function keyboard_position(note)
{
	var n = note % 12;
	var o = Math.floor(note / 12) - 5;
	var cx = [ 0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12 ];
	var cy = [ 0, -1, 0, -1, 0, 0, -1, 0, -1, 0, -1, 0 ];
	var blk = [ false, true, false, true, false, false, true, false, true, false, true, false ];
	var x = cx[n] + o * 14;
	var y = cy[n];
	return [x, y, blk[n]];
}

////////////////////////////////////////////////////////////////
var key_to_note = Array();
key_to_note['z'] = 60;
key_to_note['s'] = 61;
key_to_note['x'] = 62;
key_to_note['d'] = 63;
key_to_note['c'] = 64;
key_to_note['v'] = 65;
key_to_note['g'] = 66;
key_to_note['b'] = 67;
key_to_note['h'] = 68;
key_to_note['n'] = 69;
key_to_note['j'] = 70;
key_to_note['m'] = 71;
key_to_note[','] = 72;
key_to_note['q'] = 72;
key_to_note['2'] = 73;
key_to_note['w'] = 74;
key_to_note['3'] = 75;
key_to_note['e'] = 76;
key_to_note['r'] = 77;
key_to_note['5'] = 78;
key_to_note['t'] = 79;
key_to_note['6'] = 80;
key_to_note['y'] = 81;
key_to_note['7'] = 82;
key_to_note['u'] = 83;
key_to_note['i'] = 84;
