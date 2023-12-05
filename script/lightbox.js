const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

export function initializeLogin() {
  let lightBoxButton = document.getElementById('js-login');

  // 確保按鈕存在
  if (lightBoxButton) {
    // 監聽點擊事件
    lightBoxButton.addEventListener('click', function () {
      // 動態生成燈箱的 HTML 結構
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
            <a class="forget-password" ahref="">忘記密碼</a>
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
      console.clear();

      loginBtn.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;
        Array.from(e.target.parentNode.parentNode.classList).find((element) => {
          if (element !== "slide-up") {
            parent.classList.add('slide-up')
          } else {
            signupBtn.parentNode.classList.add('slide-up')
            parent.classList.remove('slide-up')
          }
        });
      });

      signupBtn.addEventListener('click', (e) => {
        let parent = e.target.parentNode;
        Array.from(e.target.parentNode.classList).find((element) => {
          if (element !== "slide-up") {
            parent.classList.add('slide-up')
          } else {
            loginBtn.parentNode.parentNode.classList.add('slide-up')
            parent.classList.remove('slide-up')
          }
        });
      });
    });
  }
}
