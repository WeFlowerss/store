const tg = window.Telegram.WebApp;
tg.expand();
console.log(tg);
tg.showAlert("Hello World");
export class Telegram {
  static data = tg.initData || { userId: 433982686 };
}
