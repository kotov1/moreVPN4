
$(function() {

	// Фиксирование состояние рекомендованной карточки тарифного плана
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


	

	// FORM VALIDATION
	$('.card-firstName, .card-lastName').keypress(function(key) { ;
		if((key.charCode >= 33 && key.charCode <= 64) || (key.charCode >= 91 && key.charCode <= 96) || (key.charCode >= 123 && key.charCode <= 127)) return false;
	});

	$('.card-number').mask("0000 0000 0000 0000");
	$('.card-date').mask("00 / AZ", {
		translation: {
			'A': {
				pattern: /[0-1]/, optional: true	
			},
			'Z': {
				pattern: /[0-2]/, optional: true
			}
		}
	});
	$('.card-cvv').mask("000");
	$('.card-postal').mask("000");
	$('.card-coupon').mask("0000 0000 0000 0000");

	$('.tarrifs-item').click(function() {
		$('#login-collapse').collapse();
		var top = $('#login-collapse').offset().top;
		$('body,html').animate({scrollTop: top-100}, 1000);
	});

	$("#login-form").validate({
			rules: {
				email: {
					required: true,
					email: true
				},
				password: {
					required: true
				},
				password_confirm: {
					required: true,
					equalTo: "#password"
				}
			},
			messages: {
				email: "Please enter a valid email address",
				password: {
					required: "Please provide a password",
					minlength: "Your password must be at least 5 characters long"
				},
				password_confirm: {
					required: "Please provide a password",
					minlength: "Your password must be at least 5 characters long",
					equalTo: "Please enter the same password as above"
				}
			}
		});


	$('.form-text-btn').click(function(event) {
		event.preventDefault();
		if($("#login-form").valid()) {
			$('#step-accordion').collapse();
		}
	});



	$(".payment-form1").validate({
			rules: {
				inputFirstName1: "required",
				inputLastName1: "required",
				inputCardNumber1: {
						required: true,
						minlength: 19
					},
				inputExpirationDate1: {
						required: true,
						minlength: 7
					},
				inputCvv1: {
					required: true,
					minlength: 3
				},
				inputPostalCode1: {
					required: true,
					minlength: 3
				},
				inputCoupon1: {
					minlength: 19
				}	
			},
			messages: {
				inputFirstName1: "Please enter your firstname",
				inputLastName1: "Please enter your lastname",
				inputCardNumber1: {
					required: "Please provide a card number",
					minlength: "The number must contain at least 16 numbers"
				},
				inputExpirationDate1: {
					required: "Please provide an expiration date",
					minlength: "The number must contain at least 4 numbers"
				},
				inputCvv1: {
					required: "Please provide a cvv number",
					minlength: "The number must contain at least 3 numbers"
				},
				inputPostalCode1: {
					required: "Please provide a postal code",
					minlength: "The number must contain at least 3 numbers"
				},
				inputCoupon1: {
					minlength: "The number must contain at least 16 numbers"
				},
			}
		});

	$(".payment-form2").validate({
			rules: {
				inputFirstName2: "required",
				inputLastName2: "required",
				inputCardNumber2: {
						required: true,
						minlength: 19
					},
				inputExpirationDate2: {
						required: true,
						minlength: 7
					},
				inputCvv2: {
					required: true,
					minlength: 3
				},
				inputPostalCode2: {
					required: true,
					minlength: 3
				},
				inputCoupon2: {
					minlength: 19
				}	
			},
			messages: {
				inputFirstName2: "Please enter your firstname",
				inputLastName2: "Please enter your lastname",
				inputCardNumber2: {
					required: "Please provide a card number",
					minlength: "The number must contain at least 16 numbers"
				},
				inputExpirationDate2: {
					required: "Please provide an expiration date",
					minlength: "The number must contain at least 4 numbers"
				},
				inputCvv2: {
					required: "Please provide a cvv number",
					minlength: "The number must contain at least 3 numbers"
				},
				inputPostalCode2: {
					required: "Please provide a postal code",
					minlength: "The number must contain at least 3 numbers"
				},
				inputCoupon2: {
					minlength: "The number must contain at least 16 numbers"
				},
			}
		});

	$(".payment-form3").validate({
			rules: {
				inputFirstName3: "required",
				inputLastName3: "required",
				inputCardNumber3: {
						required: true,
						minlength: 19
					},
				inputExpirationDate3: {
						required: true,
						minlength: 7
					},
				inputCvv3: {
					required: true,
					minlength: 3
				},
				inputPostalCode3: {
					required: true,
					minlength: 3
				},
				inputCoupon3: {
					minlength: 19
				}	
			},
			messages: {
				inputFirstName3: "Please enter your firstname",
				inputLastName3: "Please enter your lastname",
				inputCardNumber3: {
					required: "Please provide a card number",
					minlength: "The number must contain at least 16 numbers"
				},
				inputExpirationDate3: {
					required: "Please provide an expiration date",
					minlength: "The number must contain at least 4 numbers"
				},
				inputCvv3: {
					required: "Please provide a cvv number",
					minlength: "The number must contain at least 3 numbers"
				},
				inputPostalCode3: {
					required: "Please provide a postal code",
					minlength: "The number must contain at least 3 numbers"
				},
				inputCoupon3: {
					minlength: "The number must contain at least 16 numbers"
				},
			}
		});


	$('.js-redirect').click(function(event) {
		event.preventDefault;
		console.log('cl');
		if($(this).closest('form').valid()) {
			location.replace("payment.html");
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