$(function() {
  $('.Map .Map-content div').hide();
  $('.Map .Map-content div').eq(0).show();
  $(" .Map .Map-title a").mouseover(function() {
    $(this).addClass('on').siblings().removeClass('on');
    var index = $(this).index();
    var number = index;
    $('.Map .Map-content div').hide();
    $('.Map .Map-content div:eq(' + index + ')').show();
  });
  var auto = 1; //等于1则自动切换，其他任意数字则不自动切换
  if (auto == 1) {
    var number = 0;
    var maxNumber = $(' .Map .Map-title a').length;
    function autotab() {
      number++;
      number == maxNumber ? number = 0 : number;
      $('.Map .Map-title a:eq(' + number + ')').addClass('on').siblings().removeClass('on');
      $('.Map .Map-content div:eq(' + number + ')').show().siblings().hide();
    }
    var tabChange = setInterval(autotab, 1000);
    //鼠标悬停暂停切换
    $('.Map').mouseover(function() {
      clearInterval(tabChange);
    });
    $('.Map').mouseout(function() {
      tabChange = setInterval(autotab, 1000);
    });
  }
});
