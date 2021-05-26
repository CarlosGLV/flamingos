function recolocar() {
	// Le quitamos el ancho del borde
	$('.container').width($(window).width()-20);
	// Calculamos las alturas de cada bloque a partir de la imagen más grande. Ya que al ser absolutas las capas, no "empujan"
	var alturaBloque1 = $('section#gallery ul.bloque1 li.image-chauffeur img').height();
	var alturaBloque2 = $('section#gallery ul.bloque2 li.image-rent-a-house img').height();
	//var alturaBloque3 = '320px';
	var alturaBloque4 = $('section#gallery ul.bloque4 li.image-events img').height();
	var alturaBloque5 = $('section#gallery ul.bloque5 li.image-security img').height();
	var alturaBloque6 = $('section#gallery ul.bloque6 li.image-tickets img').height();
	
	
	
	
	$('section#gallery ul.bloque1').height(alturaBloque1);
	$('section#gallery ul.bloque2').height(alturaBloque2);
	// Igualamos los 3 destacados al tamaño de la última imagen (es lo más parecido), ya que no hay imagen como referencia en ese bloque y así crecerá al mismo tamaño
	$('section#gallery ul.bloque3').height(alturaBloque6);
	$('section#gallery ul.bloque4').height(alturaBloque4);
	$('section#gallery ul.bloque5').height(alturaBloque5);
	$('section#gallery ul.bloque6').height(alturaBloque6);
	
	// Banners: info centrada horizontal y verticalmente según su tamaño
	anchoBannerChauffeur = ($('.banner-chauffeur p').width());
	altoBannerChauffeur = ( ($('.banner-chauffeur p').height()) )+20;
	$('.banner-chauffeur p').css({
		'left': '50%',
		'margin-left': -(anchoBannerChauffeur/2),
		'top': '50%',
		'margin-top': -(altoBannerChauffeur/2)
	});
	
	anchoBannerRentAHouse = ($('.banner-rent-a-house p').width());
	altoBannerRentAHouse = ( ($('.banner-rent-a-house p').height()) )+20;
	$('.banner-rent-a-house p').css({
		'left': '50%',
		'margin-left': -(anchoBannerRentAHouse/2),
		'top': '50%',
		'margin-top': -(altoBannerRentAHouse/2)
	});
	
	anchoBannerVip = ($('.banner-vip p').width());
	altoBannerVip = ( ($('.banner-vip p').height()) )+20;
	$('.banner-vip p').css({
		'left': '50%',
		'margin-left': -(anchoBannerVip/2),
		'top': '50%',
		'margin-top': -(altoBannerVip/2)
	});
	
	anchoBannerHotels = ($('.banner-hotels p').width());
	altoBannerHotels = ( ($('.banner-hotels p').height()) )+20;
	$('.banner-hotels p').css({
		'left': '50%',
		'margin-left': -(anchoBannerHotels/2),
		'top': '50%',
		'margin-top': -(altoBannerHotels/2)
	});
	
	anchoBannerEvents = ($('.banner-events p').width());
	altoBannerEvents = ( ($('.banner-events p').height()) )+20;
	$('.banner-events p').css({
		'left': '50%',
		'margin-left': -(anchoBannerEvents/2),
		'top': '50%',
		'margin-top': -(altoBannerEvents/2)
	});
	
	anchoBannerSpecialPlans = ($('.banner-special-plans p').width());
	altoBannerSpecialPlans = ( ($('.banner-special-plans p').height()) )+20;
	$('.banner-special-plans p').css({
		'left': '50%',
		'margin-left': -(anchoBannerSpecialPlans/2),
		'top': '50%',
		'margin-top': -(altoBannerSpecialPlans/2)
	});
	
	anchoBannerSecurity = ($('.banner-security p').width());
	altoBannerSecurity = ( ($('.banner-security p').height()) )+20;
	$('.banner-security p').css({
		'left': '50%',
		'margin-left': -(anchoBannerSecurity/2),
		'top': '50%',
		'margin-top': -(altoBannerSecurity/2)
	});
	
	anchoBannerBoats = ($('.banner-boats p').width());
	altoBannerBoats = ( ($('.banner-boats p').height()) )+20;
	$('.banner-boats p').css({
		'left': '50%',
		'margin-left': -(anchoBannerBoats/2),
		'top': '50%',
		'margin-top': -(altoBannerBoats/2)
	});
	
	anchoBannerCatering = ($('.banner-catering p').width());
	altoBannerCatering = ( ($('.banner-catering p').height()) )+20;
	$('.banner-catering p').css({
		'left': '50%',
		'margin-left': -(anchoBannerCatering/2),
		'top': '50%',
		'margin-top': -(altoBannerCatering/2)
	});
	
	anchoBannerTickets = ($('.banner-tickets p').width());
	altoBannerTickets = ( ($('.banner-tickets p').height()) )+20;
	$('.banner-tickets p').css({
		'left': '50%',
		'margin-left': -(anchoBannerTickets/2),
		'top': '50%',
		'margin-top': -(altoBannerTickets/2)
	});
	
	
}



/*  ******************
No se mostrará la galería, hasta que no estén cargadas las imágenes.
El problema es que, al calcular los tamaños de los ul.bloque a partir de los tamaños de las imágenes en este .js, si no se cargan antes va haciendo efectos de "recolocado".
Por tanto, no se muestra el contenedor de gallery hasta que no se carguen todas las imágenes.
Para ello, se utiliza $(window).load, que dice que hasta que no se cargue toda la página (imágenes, js, html...) no hará lo que digamos
*/
$(window).load(function(){
	$('section#gallery .loading').hide();
	$('section#gallery .container').show();
	if($(window).width()>480) {
		recolocar();
	}
});

$(document).ready(function() {
	if($(window).width()>480) {
		$('section#gallery .loading').width($(window).width()-20);
		$('header .container').width($(window).width()-20);
	}
	/* Validación formulario: */
	// Lo reiniciamos al actualizar
	/*$('form #name').val("");
	$('form #email').val("");
	$('form #message').val("");
	$('form #name').removeAttr('disabled');
	$('form #email').removeAttr('disabled');
	$('form #message').removeAttr('disabled');*/
			
	$('section#contact form').submit(function() {
		var errorMail = 0;
		var errorMessage = 0;
		var errorTotal = 0;
		if( $('form #email').val()=="" || $('form #email').val().indexOf('@', 0) == -1 || $('form #email').val().indexOf('.', 0) == -1 ) {
			$('form #email').addClass('error');
			errorMail = 1;
		} else {
			$('form #email').removeClass('error');
			errorMail = 0;
		}
		if( $('form #message').val()=="") {
			$('form #message').addClass('error');
			errorMessage = 1;
		} else {
			$('form #message').removeClass('error');
			errorMessage = 0;
		}
		
		//
		errorTotal = errorMail + errorMessage;
		if(errorTotal!=0) {
			return false;
		}
		$(this).addClass('disabled');
		$('form #submit').hide();
		$('form .form-loading').show();
		
	});
	
});

$(window).resize(function() {
	if($(window).width()>480) {
    	recolocar();
	}
});