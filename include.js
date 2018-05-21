function using(path) {

	if(document.body && document.head && path) {

		if(path.substring(path.length - 4, path.length) == ".css") {
			let link = document.createElement("link");
			link.href = path;
			link.type = 'text/css';
			link.rel = 'stylesheet';
			link.onload = function(e) {
				console.log('Loading style include: '+e.target.href.toString());
			};
			document.head.appendChild(link);
			return true;
		} else if(path.substring(path.length - 3, path.length) == ".js") {
			let script = document.createElement("script");
			script.src = path;
			script.type = 'text/javascript';
			script.onload = function(e) {
				console.log('Loading script include: '+e.target.src.toString());
			};
			document.head.appendChild(script);
			return true;
		} else {
			console.warn('Unknown include type: '+path.toString());
			return false;
		}
		
	} else {
		return false;
	}
}

