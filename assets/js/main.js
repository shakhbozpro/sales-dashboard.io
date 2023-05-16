const sidebar = document.querySelector(".sidebar");
const sidebarClosed = document.querySelector(".close");
const sidebarBtn = document.querySelector(".menu-btn");
const transactionStatus = document.querySelectorAll(".transaction-status");
const supportRequestText = document.querySelectorAll(".support-request-text");
const sidebarDropdownItems = document.querySelectorAll(".sidebar-item");
const arrow = document.querySelectorAll('.arrow');
const mobilesidebarBtn = document.querySelector(".mobile-sidebar-btn");
const langDropdowns = document.querySelectorAll(".lang-dropdown");
const mobileNtfBtn = document.querySelector(".notification-btn");
const mobileNtf = document.querySelector(".mobile-notifications-wrapper");
const ntfBtn = document.getElementById("ntf-btn");
const ntf = document.querySelector(".notifications-wrapper");
const notiDropdownBtns = document.querySelectorAll(".notification-dropdown-btn");

// ! Sidebar's button's onclick event
sidebarBtn.addEventListener("click", function () {
  sidebar.classList.toggle("close");

  // store the sidebar state in local storage
  const isClosed = sidebar.classList.contains("close");
  localStorage.setItem("sidebarClosed", isClosed);
});

document.addEventListener("DOMContentLoaded", function () {
  const isClosed = localStorage.getItem("sidebarClosed") === "true";
  if (isClosed) {
    sidebar.classList.add("close");
  }
});

if (!sidebar.matches("close")) {
  // ! Dropdown function
  sidebarDropdownItems.forEach(item => {
    const list = item.querySelector("ul");

    item.addEventListener("click", (e) => {
      item.classList.toggle("showMenu");
      if (item.matches(".showMenu")) {
        item.style.paddingBottom = "0";
        const iconLink = item.querySelector(".icon-link");
        iconLink.style.paddingBottom = "16px";
      } else {
        iconLink.style.paddingBottom = "0px";
        item.style.paddingBottom = "16px";
      }
    });
  });
  // for rotating clicked item's arrow
  for (let i = 0; i < sidebarDropdownItems.length; i++) {
    sidebarDropdownItems[i].addEventListener('click', () => {
      const images = sidebarDropdownItems[i].querySelectorAll('img');
      images[1].classList.toggle('rotate-90');
    });
  };
};

// ! Onclick event for opening and closing mobile sidebar
mobilesidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle("left-[-100%]");
});

// ! Function for changing main content styles when window resizes
const element = document.querySelector('.main-content');

function checkWindowSize() {
  // check the width of the window
  const windowWidth = window.innerWidth;

  // if the window width is greater than 1024px, add the class to the element
  if (windowWidth > 1138) {
    element.classList.add('main-content-styles');
  }
  // if the window width is less than or equal to 1024px, remove the class from the element
  else {
    element.classList.remove('main-content-styles');
  }
}

// run the function on load and whenever the window is resized
window.addEventListener('load', checkWindowSize);
window.addEventListener('resize', checkWindowSize);

// ! Choosing header's language dropdown value
langDropdowns.forEach(dropdown => {
  const selectedLangText = document.querySelector('.selected-lang');
  const selectedLangImg = document.querySelector('.selected-lang-img');
  const langsOptions = dropdown.querySelectorAll('.lang-item');

  langsOptions.forEach(option => {
    option.addEventListener("click", () => {
      selectedLangText.textContent = option.textContent;
      const optionImgElement = option.querySelector("img");
      selectedLangImg.src = optionImgElement.src;
    })
  })
});

// ! Function for opening and closing notifications
mobileNtfBtn.addEventListener("click", openMobileNotification);
function openMobileNotification() {
  mobileNtf.classList.toggle("hidden");
}

ntfBtn.addEventListener("click", openNotification);
function openNotification() {
  ntf.classList.toggle("hidden");
}

// ! Norification dropdown button click
notiDropdownBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const parentElement = btn.parentElement;
    const dropdownList = parentElement.querySelector(".notification-item-dropdown");
    dropdownList.classList.toggle("hidden")
  })
});

// ! Data for the bar chart1
const data = [23, 20, 28, 18, 21, 31, 29, 26, 30, 24, 28, 43];

// Get the canvas element and its context
const canvas = document.getElementById("barChart");
const ctx = canvas.getContext("2d");

// Set the dimensions and styling of the chart
const chartHeight = canvas.height - 30;
const chartWidth = canvas.width - 30;
const barSpacing = 12;
const barWidth = 10;

// Loop through the data and draw each bar
for (let i = 0; i < data.length; i++) {
  const barHeight = data[i] * chartHeight / Math.max(...data);

  // Set an array of colors to use for each bar
  const colors = ["#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#6576FF"];

  // Set the color of the bar
  ctx.fillStyle = colors[i];

  // Draw the bar
  ctx.fillRect(
    i * (barWidth + barSpacing) + 5,
    canvas.height - barHeight - 15,
    barWidth,
    barHeight
  );
}

// ! Data for the bar chart2
const data2 = [28, 20, 35, 15, 25, 38];

// Get the canvas element and its context
const canvas2 = document.getElementById("barChart2");
const ctx2 = canvas2.getContext("2d");

// Set the dimensions and styling of the chart
const chartHeight2 = canvas2.height - 30;
const chartWidth2 = canvas2.width - 30;
const barSpacing2 = 10;
const barWidth2 = 10;

// Loop through the data2 and draw each bar
for (let i = 0; i < data2.length; i++) {
  const barHeight = data2[i] * chartHeight2 / Math.max(...data2);

  // Set an array of colors to use for each bar
  const colors2 = ["#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#6576FF"];

  // Set the color of the bar
  ctx2.fillStyle = colors2[i];

  // Draw the bar
  ctx2.fillRect(
    i * (barWidth2 + barSpacing2) + 5,
    canvas2.height - barHeight - 15,
    barWidth2,
    barHeight
  );
}

// ! Data for the bar chart3
const data3 = [28, 20, 35, 15, 25, 38];

// Get the canvas element and its context
const canvas3 = document.getElementById("barChart3");
const ctx3 = canvas3.getContext("2d");

// Set the dimensions and styling of the chart
const chartHeight3 = canvas3.height - 30;
const chartWidth3 = canvas3.width - 30;
const barSpacing3 = 12;
const barWidth3 = 10;

// Loop through the data3 and draw each bar
for (let i = 0; i < data3.length; i++) {
  const barHeight = data3[i] * chartHeight3 / Math.max(...data3);

  // Set an array of colors to use for each bar
  const colors3 = ["#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#6576FF"];

  // Set the color of the bar
  ctx3.fillStyle = colors3[i];

  // Draw the bar
  ctx3.fillRect(
    i * (barWidth3 + barSpacing3) + 5,
    canvas2.height - barHeight - 15,
    barWidth3,
    barHeight
  );
}

// ! Data for the line chart
let ctxx = document.getElementById("myChart").getContext("2d");
let myChart = new Chart(ctxx, {
  type: "line",
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15"],
    datasets: [
      {
        label: "Sales Overview",
        data: [5, 15, 4, 20, 2, 15, 5, 15, 4, 20, 2, 15, 5, 15, 4,],
        backgroundColor: "#E0E4FF",
        borderColor: "#6576FF",
        borderWidth: 2,
        pointRadius: 0, // set point radius to 0 to hide points on the chart
      },
    ],
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    tooltips: {
      enabled: true,
      mode: 'label',
      intersect: false,
      titleFontSize: 16,
      bodyFontSize: 18,
      titleSpacing: -5,
    },
  },
});

// ! Transaction status styling
transactionStatus.forEach(item => {
  if (item.textContent === "Paid") {
    item.classList.add("text-[#1EE0AC]", "transaction-paid");
  }
  if (item.textContent === "Canceled") {
    item.classList.add("text-[#E85347]", "transaction-canceled");
  }
})

// ! Support request styling
supportRequestText.forEach(item => {
  if (item.textContent === "Pending") {
    item.classList.add("text-[#F4BD0E]", "support-request-pending");
  }
  if (item.textContent === "Open") {
    item.classList.add("text-[#09C2DE]", "support-request-open");
  }
  if (item.textContent === "Solved") {
    item.classList.add("text-[#1EE0AC]", "support-request-solved");
  }
});