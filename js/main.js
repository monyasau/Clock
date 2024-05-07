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


let hoursTab = document.getElementById("hours");
let minutesTab = document.getElementById("minutes");

const updateTabs=(hour,minutes)=>{
  (hour>12)?hoursTab.innerHTML=hour-12:hoursTab.innerHTML;
  (minutes<10)?minutesTab.innerHTML="0"+minutes:minutesTab.innerHTML=minutes;

}

const updateTime=()=>{
let dateTime =  new Date();
  updateTabs(dateTime.getHours(), dateTime.getMinutes());

}

updateTime();
setInterval(()=>{updateTime()},1000)