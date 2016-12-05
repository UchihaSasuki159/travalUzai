/**
 * Created by Administrator on 2016/12/5.
 */
$(function () {
    //切换首选地址
    var leave_area=null
   $(".header .area").find(".strat_city_wrap").hover(
       function () {
           $(this).addClass("strat_city_on");
           $(".header .area").find(".start_city_choose").show();
       },function () {
           var _this=$(this);
           leave_area=setTimeout(function(){
               _this.removeClass("strat_city_on");
               $(".header .area").find(".start_city_choose").hide();
           },100)

   });
    $(".header .area").find(".start_city_choose").hover(function(){
        clearTimeout(leave_area)
    },function(){
        $(this).hide();
        $(".header .area").find(".strat_city_wrap").removeClass("strat_city_on");
    });
    //头部划过显示隐藏
    $(".header .top").find(".fuli").hover(function(){
        $(".header .top").find(".detail").show()
    },function(){
        $(".header .top").find(".detail").hide()
    });
    //头部广告关闭出现左侧图标
    $(".header>.ad").find("span").click(function(){
        $(this).parent().fadeOut()
    });
});






































