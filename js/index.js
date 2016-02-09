$(function(){
	$("#tu11").click(function(){
var x;
var y;
var z;
var w;
x=document.getElementById("zi1");
x.innerHTML="[人才培养]"
y=document.getElementById("zi2");
y.innerHTML="“梦拓”——传递温暖与爱的桥梁";
z=document.getElementById("p");
z.innerHTML="09";
w=document.getElementById("a");
w.innerHTML="2015.09";
})
$("#tu12").click(function(){
var x;
var y;
var z;
var w;
x=document.getElementById("zi1");
x.innerHTML="[科学研究]"
y=document.getElementById("zi2");
y.innerHTML=" 聚焦能源材料新动态";
z=document.getElementById("p");
z.innerHTML="01";
w=document.getElementById("a");
w.innerHTML="2015.09";
})

$("#tu13").click(function(){
var x;
var y;
var z;
var w;
x=document.getElementById("zi1");
x.innerHTML="[文化传承]"
y=document.getElementById("zi2");
y.innerHTML="予北航，我念你--祝北航生日快乐！";
z=document.getElementById("p");
z.innerHTML="24";
w=document.getElementById("a");
w.innerHTML="2015.10";
})

$("#tu14").click(function(){
var x;
var y;
var z;
var w;
x=document.getElementById("zi1");
x.innerHTML="[社会责任]"
y=document.getElementById("zi2");
y.innerHTML="七十载，为了不能忘却的记忆";
z=document.getElementById("p");
z.innerHTML="17";
w=document.getElementById("a");
w.innerHTML="2015.12";
})

$("#tu15").click(function(){
var x;
var y;
var z;
var w;
x=document.getElementById("zi1");
x.innerHTML="[全球合作]"
y=document.getElementById("zi2");
y.innerHTML=" 北航全球伙伴日暨海外学习日";
z=document.getElementById("p");
z.innerHTML="08";
w=document.getElementById("a");
w.innerHTML="2015.12";
})
$("#tu16").click(function(){
var x;
var y;
var z;
var w;
x=document.getElementById("zi1");
x.innerHTML="[校园生活]"
y=document.getElementById("zi2");
y.innerHTML="“我的北航，我的家”手机微拍作品赛";
z=document.getElementById("p");
z.innerHTML="13";
w=document.getElementById("a");
w.innerHTML="2015.12";
})

				$("#top1").click(function(){					
					$("#top2").slideToggle(500);
				});
				$("#top4").click(function(){					
					$("#top2").slideToggle(500);
				});
				$("#top5").click(function(){					
					$("#top2").slideToggle(500);
				});
				$("#top6").click(function(){					
					$("#top2").slideToggle(500);
				});
				$("#top7").click(function(){					
					$("#top2").slideToggle(500);
				});
				$("#top8").click(function(){					
					$("#top2").slideToggle(500);
				});
				$("#top9").click(function(){					
					$("#top2").slideToggle(500);
				});
				$("#z1").hover(function(){
					$("#zo").show(0);
					$("#zoo").hide(0)
					$("#zooo").hide(0)
				});
				$("#z2").hover(function(){					
					$("#zoo").show(0);
					
					$("#zooo").hide(0)
				});
				$("#z3").hover(function(){					
					$("#zooo").show(0);
				
				});
				//lunhuantu
				
				$("#tu11").click(function(){
					$("#tu1").show()
					$("#tu2").hide()
					$("#tu3").hide()
					$("#tu4").hide()
					$("#tu5").hide()
					$("#tu6").hide()
					
				})
				$("#tu12").click(function(){
					$("#tu2").show();
					$("#tu1").hide()
					$("#tu3").hide()
					$("#tu4").hide()
					$("#tu5").hide()
					$("#tu6").hide()
					

				})
				$("#tu13").click(function(){
					$("#tu3").show()
					$("#tu2").hide()
					$("#tu1").hide()
					$("#tu4").hide()
					$("#tu5").hide()
					$("#tu6").hide()
				})
				$("#tu14").click(function(){
					$("#tu4").show()
					$("#tu2").hide()
					$("#tu3").hide()
					$("#tu1").hide()
					$("#tu5").hide()
					$("#tu6").hide()
				})
				$("#tu15").click(function(){
					$("#tu5").show()
					$("#tu2").hide()
					$("#tu3").hide()
					$("#tu4").hide()
					$("#tu1").hide()
					$("#tu6").hide()
				})
				$("#tu16").click(function(){
					$("#tu6").show()
					$("#tu2").hide()
					$("#tu3").hide()
					$("#tu4").hide()
					$("#tu5").hide()
					$("#tu1").hide()
				})
		        });	
		  var nowPage = 1;
	var t;
	
	function changepic(x){
		nowPage = x;
		clearTimeout(t);
		t = setTimeout("nextpic()",4000);
		$("#imgs img").hide();
		$("#tu"+x).show();
		if(x==1){
			var x;
            var y;
            var z;
            var w;
            x=document.getElementById("zi1");
            x.innerHTML="[人才培养]"
            y=document.getElementById("zi2");
            y.innerHTML="“梦拓”——传递温暖与爱的桥梁";
            z=document.getElementById("p");
            z.innerHTML="09";
            w=document.getElementById("a");
            w.innerHTML="2015.09";	
		}
		else{
		if(x==2){
			var x;
var y;
var z;
var w;
x=document.getElementById("zi1");
x.innerHTML="[文化传承]"
y=document.getElementById("zi2");
y.innerHTML="予北航，我念你--祝北航生日快乐！";
z=document.getElementById("p");
z.innerHTML="24";
w=document.getElementById("a");
w.innerHTML="2015.10";
		}
		else{
		if(x==3){
			var x;
            var y;
            var z;
            var w;
           x=document.getElementById("zi1");
x.innerHTML="[科学研究]"
y=document.getElementById("zi2");
y.innerHTML=" 聚焦能源材料新动态";
z=document.getElementById("p");
z.innerHTML="01";
w=document.getElementById("a");
w.innerHTML="2015.09";	
		}else{
		if(x==4){
			var x;
            var y;
            var z;
            var w;
            x=document.getElementById("zi1");
x.innerHTML="[全球合作]"
y=document.getElementById("zi2");
y.innerHTML=" 北航全球伙伴日暨海外学习日";
z=document.getElementById("p");
z.innerHTML="08";
w=document.getElementById("a");
w.innerHTML="2015.12";	
		}else{
		if(x==5){
			var x;
            var y;
            var z;
            var w;
         x=document.getElementById("zi1");
x.innerHTML="[校园生活]"
y=document.getElementById("zi2");
y.innerHTML="“我的北航，我的家”手机微拍作品赛";
z=document.getElementById("p");
z.innerHTML="13";
w=document.getElementById("a");
w.innerHTML="2015.12";
		}
	}}}}}
	function nextpic(){
		if (nowPage==5) {
			nowPage = 1;
		};
		nowPage += 1;
		changepic(nowPage);
		clearTimeout(t);
		t = setTimeout("nextpic()",4000);
	}
	$(document).ready(function(){
		t = setTimeout("nextpic()",4000);
	});
			
			
				
			