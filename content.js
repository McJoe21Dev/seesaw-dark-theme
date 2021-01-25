function seesaw() {
    document.getElementById('sp-page').style.backgroundColor = '#000'
    document.getElementsByClassName('navbar')[0].style.backgroundColor = "#000"

    setTimeout(() => {
        document.getElementsByClassName('ss-journal-header')[0].style.backgroundColor = "#000"
        document.getElementsByClassName('ss-class-nav-content-students')[0].style.backgroundColor = "#000"
    },4500)

    var _0 = document.getElementsByClassName('ss-feed-item--avatars')
    for(var i=0;i < _0.length;i++){_0[i].style.backgroundColor = "#000"}
}

seesaw()
setInterval(seesaw(),1000)