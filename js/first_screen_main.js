// JavaScript Document
// 封装一个获取id的方法
window.onload=function(){
  function byId(id){
	  return typeof(id)==="string"?document.getElementById(id):id;
  }
  // 全局变量
  var index=0,
	  timer=null,
	  promoShow=byId("promo_show"),
	  promoWrapper=byId("promo_wrapper"),
	  pics=promoWrapper.getElementsByTagName("div"),
	  len=pics.length;
	
  // 图片轮播
  function slideImg(){
	  // 遍历图片，并绑定事件
	  for(var m=0;m<len;m++){
		  // 鼠标离开3秒后图片开始切换
		  promoWrapper[m].onmouseout=function(){
			  timer=setInterval(function(){
				  index++;
				  if(index>=len) index=0;
				  changeImg();
			  },3000);
		  }
	  }
	  
  }
  
  // 切换图片
  function changeImg(){
	  // 遍历使所有图片不显示
	  for(var i=0;i<len;i++){
		  pics[i].style.display="none";
	  }
	  pics[index].style.diplay="block";
  }
  
  slideImg();
}

