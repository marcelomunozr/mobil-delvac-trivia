jQuery(function($){
	// $('.carrera').on('mouseenter',function(e){
 //    	e.stopPropagation();
	// 	$(this).find('.info-content').stop(true, true).slideToggle(300);
	// 	$(this).find('img.la-b').stop(true, true).animate({'opacity': '1'},300);
	// 	$(this).find('.request-zone').stop(true, true).slideToggle(300);
	// });
	// $('.carrera').on('mouseleave',function(e){
 //    	e.stopPropagation();
	// 	$(this).find('.info-content').stop(true, true).slideToggle(300);
	// 	$(this).find('img.la-b').stop(true, true).animate({'opacity': '0'},300);
	// 	$(this).find('.request-zone').stop(true, true).slideToggle(300);
	// });
	/*
		var dondeVamos = $(this).data('activar');
		var activate = $('.nav-tabs li a');
		if (activate.data('cual')==dondeVamos) {
			activate.addClass('active');
		}*/
	$('body').on('click', '.radio label', function(e){
		e.preventDefault();
		if ($( this ).hasClass( "activao" )) {
			$(this).removeClass('activao');
		}else{
			$('.radio label').removeClass('activao');
			$(this).addClass('activao');
		}
	});

	$('body').on('click', '.radio label', function(e){
		if ($('.radio label' ).hasClass( "activao" )) {
			//en caso de si
			$('.el-btn').removeClass('btn-continue');
			$('.el-btn').addClass('btn-continue-active');
		}else{
			//en caso de no
			$('.el-btn').removeClass('btn-continue-active');
			$('.el-btn').addClass('btn-continue');
		}
	});

	$('body').on('click', 'section.questions .nav-tabs>li>a', function(e){
		return false;
	});
	$('body').on('click', '.el-btn', function(e){

		if (! $(this).hasClass("btn-continue-active")) {
			return false;
		}else{
			var laPregunta = $(this).parents('.tab-pane');
			var valida = laPregunta.find('.radio label.activao').data('correcta');
			if (valida!='0') {
				//alert('La respuesta es incorrecta, intenta otra vez');
				return true;
			}else{
				alert('La respuesta es incorrecta, intenta otra vez');
				return false;
			}
		}
	});

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  		//e.target
		//console.log(e.target);
		var dondeVamos = $(e.target).data('activar');
		$('.nav-tabs li a[data-cual="'+dondeVamos+'"]').parent().addClass('active');

		$('.el-btn').removeClass('btn-continue-active');
		$('.el-btn').addClass('btn-continue');


	    //e.relatedTarget // previous active tab
	})


});