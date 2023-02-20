$(document).ready(function () {
  //처음에 들어오면 영상 재생되면서 화면 나오기
  $(window).load(function () {
    $(".video_box").delay("3000").fadeOut();
  });
  //타이핑 효과
  let introduce = '반드시 해내고야 마는, 프론트엔드 개발자 "이경미" 입니다.';
  setTimeout(() => {
    for (let i = 0; i < introduce.length; i++) {
      setTimeout(() => {
        $(".intro").append(introduce[i]);
      }, i * 150);
    }
  }, 2500);

  //탭 클릭시 modal 뜨게하는 로직
  for (let i = 1; i <= 4; i++) {
    $(`#wrapper_${i}`).on("click", function () {
      //초기화 한 후
      $(".modal").hide();
      $(`#modal_${i}`).show();
    });
    //닫게하는 로직
    $("body").on("click", function (event) {
      if (
        event.target.className === "close" ||
        event.target.id === "body_content" ||
        event.target.className === "logo_box" ||
        event.target.id === "wrap"
      ) {
        $(`#modal_${i}`).hide();
      }
    });
  }
});
