function toggleHam(x) {
  x.classList.toggle("change");

  let myMenu = document.getElementById('myMenu');
  if (myMenu.className === 'menu') {
    myMenu.className += ' menu-active'
  } else {
    myMenu.className = 'menu';
  }
}

function calculatePace() {
  const distance = parseFloat(document.getElementById("distance").value);

  const hours = parseFloat(document.getElementById("hours").value) || 0;
  const minutes = parseFloat(document.getElementById("minutes").value) || 0;
  const seconds = parseFloat(document.getElementById("seconds").value) || 0;

  if (!distance || distance <= 0) {
    alert("กรุณาใส่ระยะทางให้ถูกต้อง");
    return;
  }

  // แปลงเวลาทั้งหมดเป็นวินาที
  const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

  // pace (วินาทีต่อกิโลเมตร)
  const paceSeconds = totalSeconds / distance;

  const paceMin = Math.floor(paceSeconds / 60);
  const paceSec = Math.round(paceSeconds % 60);

  document.getElementById("result").innerText =
    `Pace: ${paceMin}:${paceSec.toString().padStart(2, '0')} นาที/กม.`;
}