function ss_darkmode() {
    document.getElementsByClassName('navbar')[0].style.backgroundColor = "#000"

    
    setTimeout(() => {
		if(location.href.split('/#/')[1].includes('class')){
		    var _0 = document.querySelectorAll('.ss-feed-item--avatars');
		    for(var i=0;i < _0.length;i++){_0[i].style.backgroundColor = "#000";}}
			document.querySelectorAll('.ss-journal-header')[0].style.backgroundColor = '#000';
		    document.getElementById('class-list').style.backgroundColor = "#000"
		    document.querySelectorAll('.list-group-item')[0].style.backgroundColor = "#000";
			document.querySelectorAll('#sp-nav')[0].style.backgroundColor = "#000";
		},1000)

setTimeout(() => {
	document.querySelectorAll('.sp-navbar')[0].style.backgroundColor = "#000";
	document.getElementById('sp-page').style.backgroundColor = '#000';

	ss_darkmode()
},4500);
setInterval(ss_darkmode(),2000);