//selctors
const side = document.querySelector('.sidebar')
const bar = document.querySelector('.bars')
const indi = document.querySelector('.indi')


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    evt.currentTarget.className += " active";
    
    const currentTab = document.getElementById(cityName)
    
    currentTab.style.display = "block";
    
    if (cityName === 'London') {
      document.querySelector('.bg-img').src = 'bg-image1.jpg'; // Change to the appropriate image path
    } else if (cityName === 'Paris') {
      document.querySelector('.bg-img').src = 'bg-image2.jpg'; // Change to the appropriate image path
    } else if (cityName === 'Tokyo') {
      document.querySelector('.bg-img').src = 'bg-image3.jpg'; // Change to the appropriate image path
    }

    var buttonPosition = Array.from(tablinks).indexOf(evt.currentTarget) + 1;

    const h1Tag = currentTab.querySelector("h1");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.background = buttonPosition;
    }

    h1Tag.textContent = formatNumber(buttonPosition)
 
  }


// Helper function to format the number with leading zeros
function formatNumber(num) {
  return num.toString().padStart(2, '0');
}

document.addEventListener('DOMContentLoaded', function () {
  const tablinks = document.getElementsByClassName('tablinks');
  let currentButtonIndex = 0;

  document.addEventListener('keyup', function (event) {
    if (event.key === 'ArrowUp') {
      navigateButtons(-1); 
    } else if (event.key === 'ArrowDown') {
      navigateButtons(1);
    }
  });

  function navigateButtons(direction) {
    currentButtonIndex = (currentButtonIndex + direction + tablinks.length) % tablinks.length;

    tablinks[currentButtonIndex].click();
    indi.textContent = `${formatNumber(currentButtonIndex + 1 )}/${formatNumber(tablinks.length)}`

  }
});


// Sidebar slider
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById('myNav').style.width = "0%";
}

function projectSlider() {
  document.getElementById("projects").style.width = "100%";
}

function closeProjects() {
  document.getElementById("projects").style.width = "0";
}
