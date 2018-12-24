require(["../scripts/config.js"], function() {
	require(["common", "fontscroll", "jquery", "swiper","jquery.cookie"], function(com, font, $, Swiper,cookie) {
		
		$(".imgDiv").mouseover(function(){
			$(this).find("p").css("display","block")
		})
		$(".imgDiv").mouseleave(function(){
			$(this).find("p").css("display","none")
		})
		
		// 验证登录界面
		
		const phoneRegex = new RegExp("^1[3458][0-9]{9}$");
		
		$(".loginButn").click(function(){
			if ($(".txt").val().length == 0) {
				$(".logTip").text("用户名不能为空，请填写用户名！").show();
			} else if(false == phoneRegex.test($(".txt").val())){
				$(".logTip").text("手机号输入有误").show();
			}else if($(".pass").val().length == 0){
				$(".logTip").text("密码不能为空，请填写密码！").show();
			}else if($(".verify").val().length == 0){
				$(".logTip").text("验证码不能为空，请填写验证码！").show();
			}
			else{
				$(".logTip").hide();
			}
		})
		
		
		
		
		$(".change").click(function(){
			console.log("2")
			$(".imgDiv img").attr(
				'src','https://oauth2.lechange.cn/validateCode/mark?=' + Math.random()*100000
			)
		})
		
		class Login {
					constructor() {
					this.btn = $(".loginButn");
					this.user = $(".txt");
					this.pass = $(".pass");
					this.getCookie();
					this.addEvent();
					}
					getCookie() {
						this.goods = JSON.parse($.cookie("goods"));
						
					}
					addEvent() {
						var that = this;
						this.btn.on("click",function(){
							that.userV = that.user.val()
							that.passV = that.pass.val()
							$.each(that.goods,function(index,value){
								if (value.user != that.userV) {
									alert("用户不存在")
								}else if(value.user == that.userV && value.pass != that.passV){
									alert("密码错误")
								}else if(value.user == that.userV && value.pass == that.passV){
									window.location.href ="http://localhost:8000/pages/index.html"
								}
								
							})
						})
		
					}
				}
		
				new Login()
		
		
			})
		})
		