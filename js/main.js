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
let wakeLock = null;
const requestWakeLock = async () => {
  try {
    wakeLock = await navigator.wakeLock.request('screen')
    console.log("Wake lock acquired successfully!", wakeLock);

  } catch(error) {
  console.error("Error acquiring wake lock", error)
  }
};

(async () => {
  await requestWakeLock();
})();


const updateTime=()=>{}