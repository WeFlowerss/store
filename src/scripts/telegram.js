const tg = window.Telegram.WebApp;

export function toggleButton() {
  if (tg.mainButton.isVisible) {
    tg.mainButton.close();
  } else {
    tg.mainButton.show();
  }
}
