function copyPgn(e){
	var data = document.getElementsByTagName("td"),
	str = "";
	for (var i = 0, n = data.length; i < n; ++i) {
		var el = data[i];
	//	console.log(el.innerHTML);
		str = str+" "+el.innerHTML;
	}
	str = str.substring(0, str.indexOf("<"));
	navigator.clipboard.writeText(str.trim());
	if(e!=0){
		window.setTimeout(function() {
			var lichessWindow = window.open("https://lichess.org/paste");
		}, 10);
	}
}