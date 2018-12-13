require(["../scripts/config.js"], function() {
	require(["common", "fontscroll", "jquery", "swiper"], function(com, font, _$, Swiper) {
		
		_$(".imgDiv").mouseover(function(){
			_$(this).find("p").css("display","block")
		})
		_$(".imgDiv").mouseleave(function(){
			_$(this).find("p").css("display","none")
		})

			})
		})
		