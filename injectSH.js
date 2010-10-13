var pres = document.getElementsByTagName("pre");
for (var i in pres) {
	if (!pres[i].className) {
		pres[i].className = "brush: cpp";
	}
}
SyntaxHighlighter.all();