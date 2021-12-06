if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
    .then(() => {
      console.log("Service worker registered!");
    })
    .catch(error => console.log(error));
}