// Countdown Timer (আজ থেকে ২ তারিখ পর্যন্ত)
const endDate = new Date();
endDate.setDate(2);  // প্রতি মাসের ২ তারিখ
endDate.setHours(23,59,59);

function updateTimer(){
  const now = new Date().getTime();
  const gap = endDate - now;

  if(gap <= 0){
    document.getElementById("timer").textContent = "টাইম শেষ! 🚍";
    return;
  }

  const days = Math.floor(gap/(1000*60*60*24));
  const hours = Math.floor((gap%(1000*60*60*24))/(1000*60*60));
  const mins = Math.floor((gap%(1000*60*60))/(1000*60));
  const secs = Math.floor((gap%(1000*60))/1000);

  document.getElementById("timer").textContent = 
    `${days} দিন ${hours} ঘণ্টা ${mins} মিনিট ${secs} সেকেন্ড`;
}
setInterval(updateTimer,1000);
updateTimer();

// Footer Date
document.getElementById("current-date").textContent = 
  "আজকের তারিখ: " + new Date().toLocaleDateString("bn-BD",{year:'numeric',month:'long',day:'numeric'});
