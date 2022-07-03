function vewfun(event) {
    var x = event.view;
    var doc = `
        view.innerHeight <strong>${event.view.innerHeight}</strong>(<span>display-height</span>)<br>
        view.innerWidth <strong>${event.view.innerWidth}</strong>(<span>display-width</span>)
        view.navigation.canGoBack <strong>${event.view.navigation.canGoBack}</strong>
        <br>
        view.navigation.currentEntry.id <strong>${event.view.navigation.currentEntry.id}</strong>
        view.navigation.currentEntry.key <strong>${event.view.navigation.currentEntry.key}</strong>
    `


    document.getElementById("view-dis").innerHTML = doc;
}
function detailfun(event) {
    var x = event.detail;
    document.getElementById("detail-npt").value = x;
    if (x == 3) {
        document.getElementById("detail-div").style.backgroundColor = "red"
    }
    else {
        document.getElementById("detail-div").style.backgroundColor = "yellow"
    }

}
const heightWidth = () => {
    var height = screen.height;
    var width = screen.width;
    var doc = `
    height=<strong>${height}</strong>
    <br>
    width=<strong>${width}</strong>
    `
    document.getElementById("height-width-dis").innerHTML = doc;
}
function whicefun(event) {
    var array = ["none", "left", "midddle", "right"]
    var doc = `
    you pressed the ${array[event.which]} button
    `
    document.getElementById("whice-dis").innerHTML = doc;
}
function changeValue() {
    var val = document.getElementById("image-value").value;
    if (val == "") {
        val = `https://i.ibb.co/7Wfdh91/530-5303536-light-bulb-on-and-off-png-download-light.jpg" alt="530-5303536-light-bulb-on-and-off-png-download-light`
    }
    document.getElementById("check-value-img").attributes.getNamedItem("src").value = val;
    document.getElementById("value-div").style.backgroundColor = "white"
    document.getElementById("image-value").value = "";
}
function getLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("geolocation-dis").innerHTML = "Geolocation is not supported by this browser.";
    }

}
function showPosition(position) {
    var link = `
    https://www.google.com/maps/place/3%C2%B007'37.4%22N+101%C2%B026'45.8%22E/@${position.coords.latitude},${position.coords.longitude},1048m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x3bacf6a9e1ebf698!8m2!3d3.127045!4d101.446045!5m1!1e4
    `
    var doc = `
        <ul>
            <li>Latitude: ${position.coords.latitude}</li>
            <li>Longitude: ${position.coords.longitude}</li>
            <li>Altitude: ${position.coords.altitude}</li>
            <li>Accuracy: ${position.coords.accuracy}</li>
            <li>AltitudeAccuracy: ${position.coords.altitudeAccuracy}</li>
            <li>Heading: ${position.coords.heading}</li>
            <li>Speed: ${position.coords.speed}</li>
            <a href="${link}">see on map</a>
            
        </ul>
    `
    document.getElementById("geolocation-dis").innerHTML = doc
}
function unshiftfun() {
    var array = document.getElementById("unshift-npt").value;
    array = array.split(",");
    var unshiftVal = document.getElementById("unshift-value-npt").value;
    array.unshift(unshiftVal);
    document.getElementById("unshift-dis").innerHTML = array;
}
function truncfun() {
    var num = document.getElementById("trunc-npt").value;
    var ans = Math.trunc(num);
    document.getElementById("trunc-dis").innerHTML = ans;
}

function trimfun() {
    var str = document.getElementById("trim-npt").innerHTML;
    string = str.trim();
    document.getElementById("trim-dis").innerHTML = string + " (" + str.length + " " + string.length + ")";
}
function trimreplacefun() {
    var str = document.getElementById("trim-npt").innerHTML;
    string = str.replace(/\s+/g, " ");
    document.getElementById("trim-dis").innerHTML = string + " (" + str.length + " " + string.length + ")";
}

document.getElementById("tarnsition-div").addEventListener("transitionend", () => {
    document.getElementById("tarnsition-div").innerHTML = "the transition is ended";
    document.getElementById("tarnsition-div").style = `
    color:white;
    padding:10px;
    `
    setTimeout(refun, 5000)
})
function refun() {
    document.getElementById("tarnsition-div").innerHTML = ""
}
const toPrecisionfun = () => {
    var x = Number(document.getElementById("math-npt").value);
    var y = parseInt(document.getElementById("toPrecision-npt").value);
    if (isNaN(x) == false) {
        document.getElementById("math-dis").innerText = x.toPrecision(y);
    }

}
const topfun = () => {
    let text;
    if (window.top != window.self) {
        text = "This is not the topmost window! Am I in a frame?";
    } else {
        text = "This is the topmost window!";
    }
    document.getElementById("top-dis").innerHTML = text;
}
const toFixedfun = () => {
    var x = Number(document.getElementById("math-npt").value);
    var y = parseInt(document.getElementById("toPrecision-npt").value);
    if (isNaN(x) == false) {
        document.getElementById("math-dis").innerText = x.toFixed(y);
    }

}
const mathSqurtfun = (event) => {
    var x = Number(document.getElementById("math-npt").value);
    if (isNaN(x) == false) {
        document.getElementById("math-dis").innerText = Math.sqrt(x);
    }
}
const timeStampfun = (event) => {
    var n = event.timeStamp;
    var t = Math.trunc(n / 1000);
    n = t + "s";
    if (t > 60) {
        n = Math.trunc(t / 60) + "m"
    }
    document.getElementById("timeStamp-dis").innerHTML = n;
}
const getTextRegExp = () => {
    fetch("https://api.kanye.rest/")
        .then(res => res.json())
        .then(data => showRegExpText(data))
}
const showRegExpText = data => {
    var text = data.quote;
    document.getElementById("TextRegExp-npt").value = text
}
const testfun = () => {
    var text = document.getElementById("TextRegExp-npt").value;
    var testText = document.getElementById("test-npt").value;
    var i = document.getElementById("reg-i").checked;
    var g = document.getElementById("reg-g").checked;
    var m = document.getElementById("reg-m").checked;
    try {
        if (i) {
            var pattern = new RegExp(testText, "i");
        }
        else { var pattern = new RegExp(testText, "") }
        var result = pattern.test(text);
        document.getElementById("TextRegExp-dis").innerHTML = result + "<br>" + pattern;
    }
    catch (error) {
        alert(error)
    }
}
function matchfun() {
    var text = document.getElementById("TextRegExp-npt").value;
    var testText = document.getElementById("test-npt").value;
    var i = document.getElementById("reg-i").checked;
    var g = document.getElementById("reg-g").checked;
    var m = document.getElementById("reg-m").checked;
    try {
        if (i && g && m) {
            var pattern = new RegExp(testText, "gim")
        }
        else if (i && g) {
            var pattern = new RegExp(testText, "gi")
        }
        else if (i && m) {
            var pattern = new RegExp(testText, "im")
        }
        else if (g && m) {
            var pattern = new RegExp(testText, "gm")
        }
        else if (g) {
            var pattern = new RegExp(testText, "g");
        }
        else if (i) {
            var pattern = new RegExp(testText, "i");
        }
        else {
            var pattern = new RegExp(testText, "");
        }
        var result = text.match(pattern);
        document.getElementById("TextRegExp-dis").innerHTML = result + "<br>" + pattern;
    }
    catch (errror) {
        alert(errror)
    }
}
function replacefun() {
    var text = document.getElementById("TextRegExp-npt").value;
    var replaceText = document.getElementById("test-npt").value;
    var newText = document.getElementById("replace-npt").value;
    var i = document.getElementById("reg-i").checked;
    var g = document.getElementById("reg-g").checked;
    var m = document.getElementById("reg-m").checked;
    if (i && g) {
        var pattern = new RegExp(replaceText, "gi")
    }
    else if (g) {
        var pattern = new RegExp(replaceText, "g");
    }
    else if (i) {
        var pattern = new RegExp(replaceText, "i");
    }
    else {
        var pattern = new RegExp(replaceText, "");
    }
    var result = text.replace(pattern, newText);
    alert()
    document.getElementById("TextRegExp-dis").innerHTML = result + "<br>" + pattern + " " + newText;
    document.getElementById("TextRegExp-npt").value = result;
}
const targetfun = (event) => {
    if (event.detail == 4) {
        var element = event.target;
        var tagName = element.tagName;
        var idName = element.id;
        var width = element.scrollWidth;
        var height = element.scrollHeight;
        var pointx = event.clientX
        var pointy = event.clientY
        var details = `
    tagName = ${element.tagName};<br>
    idName = ${element.id};<br>
    width = ${element.scrollWidth};<br>
    height = ${element.scrollHeight};<br>
    pointx = ${event.clientX}<br>
    pointy = ${event.clientY}<br>
    `
        if (event.which == 1) {
            var newElement = document.createElement("div");
            newElement.setAttribute("class", "new-element");
            newElement.style = `
    width: 200px;
    position: absolute;
    background-color: black;
    color: white;
    padding:10px;
    border-radius:10px;
    left:${pointx}px;
    `
            newElement.innerHTML = details;
            event.target.appendChild(newElement)
        }
    }

}
function newElementclear() {
    var elements = document.getElementsByClassName("new-element");
    for (var element of elements) {
        element.style.display = "none"
    }
}
var shoeD = "t";
function showdetailsfun(event) {
    var isTrue = shoeD;
    if (isTrue == "t") {
        shoeD = "f"
        document.body.setAttribute("onclick", "showDetails(event)")
    }
    if (isTrue == "f") {
        shoeD = "t"
        document.body.removeAttribute("onclick")
        document.getElementById("show-details-div").innerHTML = ""
    }
    alert(isTrue)
}
function showDetails(event) {
    var element = document.createElement("div");
    element.setAttribute("id", "show-details-div")
    element.style = `
    width:300px;
    position: fixed;
    background-color:black;
    color:rgb(255, 249, 65);
    top:0;
    right:0;
    padding:10px;
    `
    var doc = `
    event.clientY=${event.clientY}<br>
    event.clientX=${event.clientX}<br>
    event.pageY=${event.pageY}<br>
    event.pageX=${event.pageX}
    element.clientWidth=${event.target.clientWidth}
    element.clientHeight=${event.target.clientHeight}
    element.clientTop=${event.target.clientTop}
    element.clientLeft=${event.target.clientLeft}
    element.offsetTop=${event.target.offsetTop}
    element.offsetLeft=${event.target.offsetLeft}
    element.offsetParent=${event.target.offsetParent.tagName}
    element.offsetWidth=${event.target.offsetWidth}
    element.offsetHeight=${event.target.offsetHeight}
    window.scrollHeight=${window.scrollHeight}
    element.scrollLeft=${event.target.scrollLeft}
    element.scrollTop=${event.target.scrollTop}
    window.scrollWidth=${window.scrollWidth}
    window.pageXOffset=${window.pageXOffset}
    window.pageYOffset=${window.pageYOffset}
    screen.height=${screen.height}<br>
    screen.width=${screen.width}<br>
    innerHeight=${innerHeight}<br>
    innerWidth=${innerWidth}<br>
    outerHeight=${outerHeight}<br>
    outerWidth=${outerWidth}<br>
    `
    window.scrollBy(100, 100)
    // window.scrollTo(100, 100)
    element.innerHTML = doc
    document.body.appendChild(element);
}
function startsWithfun() {
    var text = document.getElementById("TextRegExp-npt").value;
    var testText = document.getElementById("test-npt").value;
    document.getElementById("TextRegExp-dis").innerHTML = text.startsWith(testText);
}
var getTextForString = async () => {
    var res = await fetch("https://api.kanye.rest");
    var data = await res.json();
    var text = data.quote;
    if (text.length < 50) {
        getTextForString()
    }
    if (text.length > 50) {
        document.getElementById("string-text").innerHTML = text;
    }
}
document.getElementById("string-split-npt").addEventListener("click", function (event) {
    event.stopPropagation()
})
const splitfun = () => {
    var text = document.getElementById("string-text").innerHTML;
    var splitText = document.getElementById("string-split-npt").value;
    var ans = text.split(splitText);
    document.getElementById("string-dis").innerHTML = ans
}
function spliceFun() {
    var array = document.getElementById("array-npt").value;
    array = array.replace(/\s+/g, " ");
    array = array.split(" ");
    var pattern = document.getElementById("splice-npt").value;
    pattern = pattern.replace(/\s+/g, " ");
    pattern = pattern.split(",");
    var num1 = Number(pattern[0]);
    var num2 = Number(pattern[1]);
    if (pattern.length == 2 && isNaN(parent[0]) && isNaN(parent[1])) {
        array.splice(num1, num2)
    }
    if (pattern.length > 2 && isNaN(parent[0]) && isNaN(parent[1])) {
        var newPattern = pattern.splice(2, pattern.length);
        array.splice(num1, num2, newPattern);
        var newArray = String(array);
        array = newArray.split(",")
    }

    document.getElementById("array-dis").innerHTML = array;

}
function sortFun() {
    var array = document.getElementById("array-npt").value;
    array = array.replace(/\s+/g, " ");
    array = array.split(" ");
    var ans = array.sort();
    if (array.every(checknum)) {
        var ans = array.sort()
    }
    else {
        var ans = array.sort(function (a, b) { return a - b });
    }

    document.getElementById("array-dis").innerHTML = ans;

}
function checknum(num) {
    return isNaN(num)

}
function reverseFun() {
    var array = document.getElementById("array-npt").value;
    array = array.replace(/\s+/g, " ");
    array = array.split(" ");
    var ans = array.reverse();
    document.getElementById("array-dis").innerHTML = ans;


}
function someFun() {
    var array = document.getElementById("array-npt").value;
    array = array.split(" ");
    array = array.filter(ele => ele != "");

    var ans = array.some(ele => isNaN(ele));
    alert(ans)
}
function sliceFun() {
    var array = document.getElementById("array-npt").value;
    array = array.split(" ");
    array = array.filter(ele => ele != "");
    var pattern = document.getElementById("slice-npt").value;
    if (pattern != "") {
        pattern = pattern.split(",");
        pattern = pattern.filter(ele => ele != "");
        var num1 = Number(pattern[0]);
        var num2 = Number(pattern[1]);
        if (pattern.length == 1) {
            var ans = array.slice(Number(pattern[0]))
        }
        if (pattern.length == 2) {
            var ans = array.slice(Number(pattern[0]), Number(pattern[1]))
        }
        document.getElementById("array-dis").innerHTML = ans;
    }
}
function promptfun() {
    var name = prompt("write your name", "");
    var age = prompt("write your age", "");
    if (name != "" && age != "") {
        document.getElementById("string-dis").innerHTML = "hi my name is " + name + ". I am " + age + " years old"
    }
}
function mathPawfun() {
    var num = document.getElementById("math-npt").value;
    num = num.split("^");
    var ans = Math.pow(Number(num[0]), Number(num[1]))
    document.getElementById("math-dis").innerHTML = ans;
}
function mathRoundfun() {
    var num = Number(document.getElementById("math-npt").value);
    var ans = Math.round(num)
    document.getElementById("math-dis").innerHTML = ans;

}
var elementss = document.getElementsByClassName("section-div");
for (var element of elementss) {
    var ele = document.createElement("option");
    ele.innerHTML = element.id;
    document.getElementById("slt-remove-child").appendChild(ele)
}
function removeChildFun() {
    var element = document.getElementById("slt-remove-child").value;
    var list = document.getElementById(element);
    // list.removeChild(list.firstElementChild)
    // list.removeChild(list.children[0])
    list.removeChild(list.firstChild);
    // list.parentNode.removeChild(list);
}
function readyStateFun() {
    var x = document.readyState;
    document.getElementById("readyState-dis").innerHTML = x;
}
/*class All {
    constructor(name, fName, mName, age) {
        this.name = name;
        this.fName = fName;
        this.mName = mName;
        this.age = age;
    }
    nameFun() {
        alert(this.name + "is just joined")
    }
}
class Student extends All {
    constructor(name, fName, mName, age, id) {
        super(name, fName, mName, age)
        this.id = id;
    }
}
var masum = new Student("masum", "samaul", "fatema", 23, "student");
alert(masum.fName)
*/
