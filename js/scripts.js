
$(function() {

	// tarrif plan active card
	$(".tarrifs-item").hover( function(){
		$(".tarrifs-item").eq(0).removeClass('recommend');	
	});
	$(".tarrifs-item").mouseleave(function(){
		$(".tarrifs-item").eq(0).addClass('recommend');
	});


	$('.card-header').click(function() {
		if ($(this).hasClass('opened')) {
			$(this).removeClass('opened');
		} else {
			$('.card-header').removeClass('opened');
			$(this).addClass('opened');
		}
		
	});

	$('.my-tooltip').tooltip();

	// footer links sliding
	function adjustCollapseView(){
		var desktopView = $(document).width();
		if(desktopView >= "768"){
			$(".footer-list-title").attr("data-toggle","");
			$(".footer-list").removeClass('collapse');
		}else{
			$(".footer-list-title").attr("data-toggle","collapse");
			$(".footer-list").addClass('collapse');
		}
	}

	$(function(){
		adjustCollapseView();
		$(window).on("resize", function(){
			adjustCollapseView();
		});
	});


	// password comparison
	$(".error").hide();
	$('.restrict-str').keypress(function(key) { if(key.charCode < 48 || key.charCode > 57) return false; });
	$("#password-confirm").change(function() {
		$(".error").hide();
		var valueX = $("#password").val();
		var valueY = $("#password-confirm").val();
		if (valueX != valueY) {
			$(".error").show();
		}
	});

});


// timer
function padZeros(data) {
	data = data.toString();
	while (data.length < 2) {
		data = "0" + data;
	}
	return data;
}

function update() {
	var d = new Date(new Date("12/10/2016 03:00:00 UTC+3")-new Date());
	var outStr = padZeros(d.getUTCHours()) + " " + padZeros(d.getUTCMinutes()) + " " + padZeros(d.getUTCSeconds());

	document.getElementById("js-timer").textContent = outStr;
	requestAnimationFrame(update);
}
update();