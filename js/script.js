// Twitter-TimeLine + Button Share
window.twttr = (function (d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0],
		t = window.twttr || {};
	if (d.getElementById(id)) return t;
	js = d.createElement(s);
	js.id = id;
	js.src = "https://platform.twitter.com/widgets.js";
	fjs.parentNode.insertBefore(js, fjs);

	t._e = [];
	t.ready = function (f) {
		t._e.push(f);
	};
	return t;
}(document, "script", "twitter-wjs"));

! function (d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0],
		p = /^http:/.test(d.location) ? 'http' : 'https';
	if (!d.getElementById(id)) {
		js = d.createElement(s);
		js.id = id;
		js.src = p + "://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js, fjs);
	}
}(document, "script", "twitter-wjs");
// END Twitter-TimeLine

// Social Btns
(function () {

	var popupCenter = function (url, title, width, height) {
		var popupWidth = width || 640;
		var popupHeight = height || 320;
		var windowLeft = window.screenLeft || window.screenX;
		var windowTop = window.screenTop || window.screenY;
		var windowWidth = window.innerWidth || document.documentElement.clientWidth;
		var windowHeight = window.innerHeight || document.documentElement.clientHeight;
		var popupLeft = windowLeft + windowWidth / 2 - popupWidth / 2;
		var popupTop = windowTop + windowHeight / 2 - popupHeight / 2;
		var popup = window.open(url, title, 'scrollbars=yes, width=' + popupWidth + ', height=' + popupHeight + ', top=' + popupTop + ', left=' + popupLeft);
		popup.focus();
		return true;
	};

	document.querySelector('.share_twitter').addEventListener('click', function (e) {
		e.preventDefault();
		var url = document.location.href;
		var shareUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.title) +
			"&via=ParisMLgroup" +
			"&url=" + encodeURIComponent(url);
		popupCenter(shareUrl, "Share on Twitter");
	});

	document.querySelector('.share_facebook').addEventListener('click', function (e) {
		e.preventDefault();
		var url = document.location.href;
		var shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
		popupCenter(shareUrl, "Share on Facebook");
	});

	document.querySelector('.share_linkedin').addEventListener('click', function (e) {
		e.preventDefault();
		var url = document.location.href;
		var shareUrl = "https://www.linkedin.com/shareArticle?url=" + encodeURIComponent(url);
		popupCenter(shareUrl, "Share on Linkedin");
	});

})();
//

// JQuery
$(function () { // Verification de la disponibilité du DOM avant d'exécuter du code jQuery

	// Pop-up Side Share + PartageContact
	$('[data-toggle="tooltip"]').tooltip(); //END pop-up Side Share + PartageContact

	// Definition de la fonction slider() page Home Header
	function slider() {
		$("#slide0").fadeIn(2000, function () {
			$("#slide0").delay(3000).hide(2000);
			$("#slide1").delay(3000).show(2000, function () {
				$("#slide1").delay(3000).hide(2000);
				$("#slide2").delay(3000).show(2000, function () {
					$("#slide2").delay(3000).hide(2000, function () {
						slider();
					});
				});
			});
		});
	}

	// Apres chargement de logoMl on execute la fonction slider()
	$("h1").fadeIn(1000, function () {
		
	});
$("#logoMl").fadeIn(1000, function () {
			
		});
$("#divHeader1").fadeIn(1000, function () {
				
			});
$("#divHeader2").fadeIn(1000, function () {
					slider();
				});

}); // End Verification de la disponibilité du DOM avant d'exécuter du code jQuery