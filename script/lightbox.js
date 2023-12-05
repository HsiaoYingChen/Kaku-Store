function initializeLogin() {
  let lightBoxButton = document.getElementById('indexLogin');

  if (lightBoxButton) {
    lightBoxButton.addEventListener('click', function () {
      let lightboxHtml = `
        <div class="form-structor">
          <div class="signup">
            <h2 class="form-title" id="signup">
              <span>or</span>會員登錄
            </h2>
            <div class="form-holder">
              <input type="email" class="input" placeholder="請輸入信箱"/> 
              <input type="password" class="input" placeholder="請輸入密碼"/>
            </div>
            <button class="submit-btn">登錄</button>
            <a class="forget-password" href="">忘記密碼</a>
          </div>
          <div class="login slide-up">
            <div class="center">
              <h2 class="form-title" id="login">
                <span>or</span>註冊
              </h2>
              <div class="form-holder">
                <input type="email" class="input" placeholder="email" />
                <input type="password" class="input" placeholder="密碼" />
              </div>
              <button class="submit-btn">註冊</button>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', lightboxHtml);
      console.log(lightboxHtml);
      //沒有出現
    });
  }
}

// 呼叫初始化函數
initializeLogin();
