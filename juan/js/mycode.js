var $btnMenu= $('#btn-menu');
var $menu= $('#menu');
$btnMenu.on("click",Palanca);
function Palanca(){
	$menu.slideToggle();
	return false
}
