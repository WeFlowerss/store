const tg = window.Telegram.WebApp;
tg.expand();

export class Telegram {
  static data = tg.initData || { userId: 433982686 };
}
