console.log('Loaded!');
var con = document.getElementById('data');
con.innerHTML = "hi there this is js";
var pic = document.getElementById('pic');
var marginleft = 0;
function moveRight()
{
	marginleft = marginleft + 5;
	pic.style.marginLeft = marginleft + "px";}
pic.onclick = function(){
//	pic.style.height = "100px";
var interval = setInterval(moveRight,50);
};