// 將 Firebase console「專案設定 → 一般 → 你的應用程式 → SDK 設定」入面嘅 firebaseConfig 貼喺下面。
// 記住要有 databaseURL（建立 Realtime Database 之後先會出現）。
window.FIREBASE_CONFIG = null;

/* 貼好之後應該似咁（例子，唔係真設定）：
window.FIREBASE_CONFIG = {
  apiKey: "AIza....",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef"
};
*/
