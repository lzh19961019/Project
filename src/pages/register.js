require(["../scripts/config.js"], function() {
	require(["common", "fontscroll", "jquery", "swiper", "jquery.cookie"], function(com, font, $, Swiper, cookie) {

		document.documentElement.style.overflowY = 'hidden';
		document.documentElement.style.overflowX = 'hidden';

		$(".imgDiv").mouseover(function() {
			$(this).find("p").css("display", "block")
		})
		$(".imgDiv").mouseleave(function() {
			$(this).find("p").css("display", "none")
		})

		$(".checkImg1").click(function() {
			$(this).hide().siblings().show();
		})

		$(".checkImg2").click(function() {
			$(this).hide().siblings().show();
		})

		// 手机号验证

		$(".phoneNumber").blur(function() {
			const phoneRegex = new RegExp("^1[3458][0-9]{9}$");

			if ($(this).val().length == 0) {
				$(".regTip").hide();
			} else if (false == phoneRegex.test($(this).val())) {
				$(".regTip").text("手机号输入有误").show();
			} else {
				$(".regTip").hide();
			}
		})


		//密码验证
		$(".password").keyup(function() {
			const strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
			const mediumRegex = new RegExp(
				"^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
			const enoughRegex = new RegExp("(?=.{6,}).*", "g");
			const weakRegex = new RegExp("^([0-9]+|[a-zA-Z]+|[!@#$%^&*]+)$")

			if (false == enoughRegex.test($(this).val())) {
				$(".regTip").text("密码长度低于6位").show();
				//密码小于六位的时候，密码强度图片都为灰色

			} else if (strongRegex.test($(this).val())) {
				$(".pwStr").find("span").css("background", "green");
				$(".pwStr").find(".textId").show().text("强");
				$(".regTip").hide();
				//密码为八位及以上并且字母数字特殊字符三项都包括,强度最强 

			} else if (mediumRegex.test($(this).val())) {
				$(".pwStr").find("span:nth-child(1)").css("background", "orange");
				$(".pwStr").find("span:nth-child(2)").css("background", "orange");
				$(".pwStr").find("span:nth-child(3)").css("background", "#d9d9d9");
				$(".pwStr").find(".textId").show().text("中");
				$(".regTip").hide();
				//密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等 
			} else if (weakRegex.test($(this).val())) {
				$(".pwStr").find("span:nth-child(1)").css("background", "red");
				$(".pwStr").find("span:nth-child(2)").css("background", "#d9d9d9");
				$(".pwStr").find("span:nth-child(3)").css("background", "#d9d9d9");
				$(".pwStr").find(".textId").show().text("弱");
				$(".regTip").hide();
			}

			if ($(this).val().length == 0) {
				$(".regTip").hide();
				$(".pwStr").find("span").css("background", "#d9d9d9");
				$(".textId").hide();
			}

		})

		$(".secondPas").keyup(function() {
			if ($(this).val() != $(".password").val()) {
				$(".regTip").text("两次输入密码不一致！").show();
			} else if ($(".password").val().length < 6) {
				$(".regTip").text("密码长度低于6位").show();
			} else {
				$(".regTip").hide();
			}
		})

		//验证码切换
		$(".change").click(function() {
			console.log("2")
			$(".imgDiv img").attr(
				'src', 'https://oauth2.lechange.cn/validateCode/mark?=' + Math.random() * 100000
			)
		})

	class Regsiter{
				constructor(){
					this.btn = $(".regbtn");
					this.user = $(".phoneNumber");
					this.pass = $(".password");
					
					this.addEvent()
				}
				addEvent(){
					var that = this;
					this.btn.on("click",function(){
						that.userV = that.user.val();
						that.passV = that.pass.val();
						that.setCookie();
					})
				}
				setCookie(){
	//				读取初始cookie,用来查看是否是第一次注册
					if($.cookie("goods")){
						this.goods = JSON.parse($.cookie("goods"))
					}else{
						this.goods = []
					}
					
	//				如果第一次注册,之前没有,那么length小于1
					if(this.goods.length < 1){
						this.goods.push({
							user:this.userV,
							pass:this.passV,
							onoff:1
						})
					}else{
	//					之前已经注册过
						var that = this;
						var onOff = true;
						$.each(this.goods,function(index,value){
							if(value.user == that.userV){		//发现重复
								alert("用户名重复");
								onOff = false;				//改变状态
							}
						})
						if(onOff){
							this.goods.push({
								user:this.userV,
								pass:this.passV
							})
						}
					}
					$.cookie("goods",JSON.stringify(this.goods))
				}
			}
			new Regsiter()


	})
})
