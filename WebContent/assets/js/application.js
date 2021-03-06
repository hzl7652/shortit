$(function () {
  $('<div class="navbar-inner"><div class="container"><a class="brand" href="./">短点!</a></div></div>').appendTo($('#navbar'));

  var container = $('<div class="container"></div>').append($('<p>Coded and designed by <a href="https://github.com/nutzam?tab=members" target="_blank">Nutz Production Committee</a> © 2012</p>'))
  .append($('<p>Powered by <a href="https://github.com/nutzam/nutz" target="_blank">Nutz</a></p>'))
  .append($('<p>Thanks <a href="https://github.com/twitter/bootstrap" target="_blank">Bootstrap</a></p>'))
  .append($('<p id="site-qrcode" style="display: none"><img src="https://chart.googleapis.com/chart?chs=72x72&cht=qr&choe=UTF-8&chl=http%3A%2F%2Fwww.nutz.cn%2F" /></p>'))
  .append($('<p><a href="javascript:void(0);" id="site-qrcode-str">显示本网站QR Code</a></p>'));

  var ul =  $('<ul class="footer-links"></ul>').append($('<li><a href="http://nutzam.com" target="_blank">Nutz 官网地址</a></li>'))
  .append($('<li><a href="https://github.com/nutzam/nutz" target="_blank">Nutz Github</a></li>'))
  .append($('<li><a href="http://code.google.com/p/nutz" target="_blank">Nutz GoogleCode 首页</a></li>'))
  .append($('<li><a href="https://github.com/wendal/shortit" target="_blank">shortit</a></li>'));
  container.append(ul).append($('<a href="http://www.miibeian.gov.cn" target="_blank" title="查看备案信息">苏ICP备 10226088号-17</a>')).appendTo($('.footer'));

  qrcodeToggle("site", "显示本站QR Code", "隐藏本站QR Code");
});

function qrcodeToggle(id, showStr, hideStr) {
  $("#" + id + "-qrcode-str").toggle(
    function () {
      $("#" + id + "-qrcode").show();
      $("#" + id + "-qrcode-str").html(hideStr);
    },
    function () {
      $("#" + id + "-qrcode").hide();
      $("#" + id + "-qrcode-str").html(showStr);
    }
  );
}
