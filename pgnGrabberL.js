function copyPgn(e){
	var data = document.getElementsByTagName("td"),
	usernames = document.getElementsByClassName("username"),
	sequence = document.getElementsByClassName("boardCoord"),
	result = document.getElementsByClassName("last-move"),
	pgnC = "",
	pgnM ='[Event "Gamefactory-bot chess game"]\n'
	
	if(sequence[0].style.top=="18px"){
		pgnM=pgnM+'[White "'+(usernames[0].innerHTML)+'"]\n';
		pgnM=pgnM+'[Black "'+(usernames[1].innerHTML)+'"]\n';
	}
	else {
		pgnM=pgnM+'[White "'+(usernames[1].innerHTML)+'"]\n';
		pgnM=pgnM+'[Black "'+(usernames[0].innerHTML)+'"]\n';
	}
	
		pgnM=pgnM+'[Result "'+(result[0].innerHTML)+'"]\n';
	
	for (var i = 0, n = data.length; i < n; ++i) {
		var el = data[i];
	//	console.log(el.innerHTML);
		pgnC = pgnC+" "+el.innerHTML;
	}
	pgnC = pgnC.substring(0, pgnC.indexOf("<"));
	
	navigator.clipboard.writeText(pgnM+pgnC.trim());
	
	
	
	if(e!=0){
		window.setTimeout(function() {
			var lichessWindow = window.open("https://lichess.org/paste");
		}, 10);
	}
}