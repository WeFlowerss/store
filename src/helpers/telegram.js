const tg = window.Telegram.WebApp;
tg.expand();
export class Telegram {
  static tg = tg;
  static data = tg.initData || { userId: 433982686 };
}
