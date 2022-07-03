function fun(event) {
    var clientY = event.clientY;
    var clientX = event.clientX;
    var pageY = event.pageY;
    var pageX = event.pageX;
    var clientHeight = event.target.clientHeight;
    var clientWidth = event.target.clientWidth;
    document.getElementById("third-div").innerHTML = `
    clientY=--${clientY}<br>
    clientX=--${clientX}<br>
    pageY=--${pageY}<br>
    pageX=--${pageX}<br>
    clientHeight=--${clientHeight}<br>
    clientWidth=--${clientWidth}<br>
    `
}