// const requestFullScreen = document.fullscreenEnabled
// console.log(requestFullScreen)

let fullScreenState = false;

const toggleFullScreen = () => {
  {
    fullScreenState
      ? document.documentElement.requestFullscreen()
      : document.exitFullscreen();
  }

  fullScreenState = !fullScreenState;
};

document.addEventListener("dblclick", () => {
  toggleFullScreen();
});