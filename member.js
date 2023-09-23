function skillsMember() {
  let member = document.getElementById("member");
  member.innerHTML = "";
  member.innerHTML += `
    <div class="member">
      <div class="member__title">
        <div class="member__title__content">
          <h2>Đội ngũ thành viên</h2>
          <p>Chúng tôi là những người đam mê công nghệ và luôn nỗ lực hết mình để đem đến những sản phẩm tốt nhất cho khách hàng.</p>
        </div>
      </div>
      <div class="member__content">
        <div class="member__content__item">
          <div class="member__content__item__img">
            <img src="./assets/images/member-1.jpg" alt="">
          </div>
          <div class="member__content__item__info">
            <h4>Nguyễn Huy Hoàng</h4>
            <p>Founder</p>
            <div class="member__content__item__info__social">
              <a href="https://www.facebook.com/hoang.huy.319452/" target="_blank"><i class="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/hoanghuy_2603/" target="_blank"><i class="fab fa-instagram"></i></a>
              <a href="