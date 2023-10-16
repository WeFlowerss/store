import { decodeQueryString } from "./services";
const tg = window.Telegram.WebApp;
tg.expand();
export class Telegram {
  static tg = tg;
  static data = decodeQueryString(tg.initData) || { id: 433982686 };
}
