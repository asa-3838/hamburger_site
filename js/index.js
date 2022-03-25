// //Menuボタンをクリックすれば、クラスis-openを付与し、サイドバー展開
// $('#menu_btn').on('click', function(){
//   SlideMenu()
// });

// // スライドメニュー関数
// const SlideMenu = () => {
//   if($('#menu').hasClass("SlideOut")){
//     // スライドメニューが非表示なら表示
//     $('#menu').removeClass('SlideOut');
//     $('#menu').addClass('SlideIN');
//   } else {
//     // スライドメニューがあれば非表示
//     $('#menu').removeClass('SlideIN');
//     $('#menu').addClass('SlideOut');
//   }
// }

jQuery("#menu_btn").click(function () {
  jQuery(".l-main__body").toggleClass("is-open");
  jQuery(".l-main__right").toggleClass("is-open");
  jQuery(".p-sidebar__back").toggleClass("is-open");
  jQuery(".p-sidebar__button").toggleClass("is-open");
});
//×ボタンをクリックすれば、クラスis-openを削除し、サイドバー展開
jQuery("#close_btn").click(function () {
  jQuery(".l-main__body").toggleClass("is-open");
  jQuery(".l-main__right").toggleClass("is-open");
  jQuery(".p-sidebar__back").toggleClass("is-open");
  jQuery(".p-sidebar__button").toggleClass("is-open");
});