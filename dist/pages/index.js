require(["../scripts/config.js"], function() {
	require(["common", "fontscroll", "jquery", "swiper"], function(com, font, _$, Swiper) {

		new Swiper('.swiper-container', {
			autoplay: true, //可选选项，自动滑动
			loop: true,
			effect: 'fade',
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

		})


		_$(function() {
			_$(".tabox-1 .chanlist").find("li").eq(0).addClass("checkactive");
			_$(".tabox-1 .check1").show();
			var timelt = null;
			var now = 0;

			function startMovelt() {
				clearInterval(timelt);
				timelt = setInterval(function() {
					if (now) {
						now = 0;
						_$(".tabox-1 .check1").fadeIn(500);
						_$(".tabox-1 .check2").hide();
						_$(".tabox-1 .chanlist").find("li").eq(0).addClass("checkactive").siblings().removeClass("checkactive");
					} else {
						now = 1;
						_$(".tabox-1 .check2").fadeIn(500);
						_$(".tabox-1 .check1").hide();
						_$(".tabox-1 .chanlist").find("li").eq(1).addClass("checkactive").siblings().removeClass("checkactive");
					}
				}, 4800)
			}
			startMovelt();
			_$(".tabox-1 .chanlist").on("mouseover", "li", function() {
				clearInterval(timelt);
				_$(this).addClass("checkactive").siblings().removeClass("checkactive");
				if (_$(this).index() == 0) {
					_$(".tabox-1 .check1").fadeIn(500);
					_$(".tabox-1 .check2").hide();
				} else {
					_$(".tabox-1 .check2").fadeIn(500);
					_$(".tabox-1 .check1").hide();
				}
			});
			_$(".tabox-1 .chanlist").on("mouseout", "li", function() {
				startMovelt();
			});
			_$(".tabox-1").on("mouseover", function() {
				clearInterval(timelt)
			});
			_$(".tabox-1").on("mouseout", function() {
				startMovelt()
			});
		})

		_$(function() {
			_$(".tabox-2 .chanlist").find("li").eq(0).addClass("checkactive");
			_$(".tabox-2 .check1").show();
			var timelt = null;
			var now = 0;

			function startMovelt() {
				clearInterval(timelt);
				timelt = setInterval(function() {
					if (now) {
						now = 0;
						_$(".tabox-2 .check1").fadeIn(500);
						_$(".tabox-2 .check2").hide();
						_$(".tabox-2 .chanlist").find("li").eq(0).addClass("checkactive").siblings().removeClass("checkactive");
					} else {
						now = 1;
						_$(".tabox-2 .check2").fadeIn(500);
						_$(".tabox-2 .check1").hide();
						_$(".tabox-2 .chanlist").find("li").eq(1).addClass("checkactive").siblings().removeClass("checkactive");
					}
				}, 4800)
			}
			startMovelt();
			_$(".tabox-2 .chanlist").on("mouseover", "li", function() {
				clearInterval(timelt);
				_$(this).addClass("checkactive").siblings().removeClass("checkactive");
				if (_$(this).index() == 0) {
					_$(".tabox-2 .check1").fadeIn(500);
					_$(".tabox-2 .check2").hide();
				} else {
					_$(".tabox-2 .check2").fadeIn(500);
					_$(".tabox-2 .check1").hide();
				}
			});
			_$(".tabox-2 .chanlist").on("mouseout", "li", function() {
				startMovelt();
			});
			_$(".tabox-2").on("mouseover", function() {
				clearInterval(timelt)
			});
			_$(".tabox-2").on("mouseout", function() {
				startMovelt()
			});
		})

		_$(function() {
			_$(".tabox-4 .chanlist").find("li").eq(0).addClass("checkactive");
			_$(".tabox-4 .check1").show();
			var timelt = null;
			var now = 0;

			function startMovelt() {
				clearInterval(timelt);
				timelt = setInterval(function() {
					if (now) {
						now = 0;
						_$(".tabox-4 .check1").fadeIn(500);
						_$(".tabox-4 .check2").hide();
						_$(".tabox-4 .chanlist").find("li").eq(0).addClass("checkactive").siblings().removeClass("checkactive");
					} else {
						now = 1;
						_$(".tabox-4 .check2").fadeIn(500);
						_$(".tabox-4 .check1").hide();
						_$(".tabox-4 .chanlist").find("li").eq(1).addClass("checkactive").siblings().removeClass("checkactive");
					}
				}, 4800)
			}
			startMovelt();
			_$(".tabox-4 .chanlist").on("mouseover", "li", function() {
				clearInterval(timelt);
				_$(this).addClass("checkactive").siblings().removeClass("checkactive");
				if (_$(this).index() == 0) {
					_$(".tabox-4 .check1").fadeIn(500);
					_$(".tabox-4 .check2").hide();
				} else {
					_$(".tabox-4 .check2").fadeIn(500);
					_$(".tabox-4 .check1").hide();
				}
			});
			_$(".tabox-4 .chanlist").on("mouseout", "li", function() {
				startMovelt();
			});
			_$(".tabox-4").on("mouseover", function() {
				clearInterval(timelt)
			});
			_$(".tabox-4").on("mouseout", function() {
				startMovelt()
			});
		})

		_$(function() {
			function chatScroll() {
				_$(".swapcomment").find("ul:first").animate({
					marginTop: "-33px"
				}, 700, function() {
					_$(this).css({
						marginTop: "0px"
					}).find("li:first").appendTo(this);
				})
			}
			setInterval(chatScroll, 2000)
		})

		_$(".new-goods li:nth-child(1)").mouseover(function() {
			_$(this).find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/image/TF5-28902.png"
			});
			_$(this).find("div").css("display", "none");
			_$(this).find(".te").css("display", "none")
			_$(this).find("p").css("display", "none");
		})
		_$(".new-goods li:nth-child(1)").mouseout(function() {
			_$(this).find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/public/image/TF5-263x263.png"
			});
			_$(this).find("div").css("display", "block");
			_$(this).find(".te").css("display", "block")
			_$(this).find("p").css("display", "block");
		})
		_$(".new-goods li:nth-child(2)").mouseover(function() {
			_$(this).find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/image/TF3-329.png"
			});
			_$(this).find("div").css("display", "none");
			_$(this).find(".te").css("display", "none")
			_$(this).find("p").css("display", "none");
		})
		_$(".new-goods li:nth-child(2)").mouseout(function() {
			_$(this).find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/public/image/TF3-263x263.png"
			});
			_$(this).find("div").css("display", "block");
			_$(this).find(".te").css("display", "block")
			_$(this).find("p").css("display", "block");
		})
		_$(".new-goods li:nth-child(3)").mouseover(function() {
			_$(this).find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/image/K5-341.png"
			});
			_$(this).find("div").css("display", "none");
			_$(this).find(".te").css("display", "none")
			_$(this).find("p").css("display", "none");
		})
		_$(".new-goods li:nth-child(3)").mouseout(function() {
			_$(this).find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/public/image/K5-263x263.png"
			});
			_$(this).find("div").css("display", "block");
			_$(this).find(".te").css("display", "block")
			_$(this).find("p").css("display", "block");
		})
		_$(".new-goods li:nth-child(4)").mouseover(function() {
			_$(this).find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/image/K6-268.png"
			});
			_$(this).find("div").css("display", "none");
			_$(this).find(".te").css("display", "none")
			_$(this).find("p").css("display", "none");
		})
		_$(".new-goods li:nth-child(4)").mouseout(function() {
			_$(this).find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/public/image/K6-263x263.png"
			});
			_$(this).find("div").css("display", "block");
			_$(this).find(".te").css("display", "block")
			_$(this).find("p").css("display", "block");
		})
		
		

		
		
		_$(function() {

			_$("nav ul li").mouseover(function() {

				_$("nav ol li").eq(_$(this).index()).show().siblings().hide();

			})
			_$(".swiper-container").mouseover(function() {
				_$("nav ol li").css("display", "none")
			})
			_$("#nav-top").mouseover(function() {
				_$("nav ol li").css("display", "none")
			})
		})


		var $nav = _$("#scrollTop")

		$(window).scroll(function() {
			var scrollTop = _$(this).scrollTop();
			if (scrollTop >= 1000) {
				$nav.fadeIn(500);
			} else {
				$nav.fadeOut(500);
			}
		})

			_$("#scrollTop").click(function(){
				_$("html").animate({scrollTop: 0}, 500);
			})


	})
})
