function ss_darkmode() {
    document.getElementsByClassName('navbar')[0].style.backgroundColor = "#000"

    try{
    	var _0 = document.querySelectorAll('.ss-feed-item--avatars');
    } catch (err){}
	for(var i=0;i < _0.length;i++){_0[i].style.backgroundColor = "#000";}

    document.querySelectorAll('#sp-nav')[0].style.backgroundColor = "#000";
    document.querySelectorAll('.list-group-item')[0].style.backgroundColor = "#000";
}

setTimeout(() => {
    document.querySelectorAll('.ss-journal-header')[0].style.backgroundColor = '#000';
    document.querySelectorAll('.sp-navbar')[0].style.backgroundColor = "#000";
    document.getElementById('sp-page').style.backgroundColor = '#000'
document.getElementById('class-list')[0].style.backgroundColor = "#000"
    
    ss_darkmode();
    },4500);
setInterval(ss_darkmode(),2000);