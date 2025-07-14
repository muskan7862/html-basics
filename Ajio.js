document.getElementById("link").addEventListener("click",function(){
    alert("You are being redirected.");
});


document.getElementById("dark-theme").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

function myfunction() {
    const button = document.getElementById("select");
    if (button.innerHTML === "♡") {
        button.innerHTML = "❤"; 
    } else {
        button.innerHTML = "♡"; 
    }
}

function myfunction1() {
    const button = document.getElementById("select1");
    if (button.innerHTML === "♡") {
        button.innerHTML = "❤"; 
    } else {
        button.innerHTML = "♡"; 
    }
}

function myfunction2() {
    const button = document.getElementById("select2");
    if (button.innerHTML === "♡") {
        button.innerHTML = "❤"; 
    } else {
        button.innerHTML = "♡"; 
    }
}

function myfunction3() {
    const button = document.getElementById("select3");
    if (button.innerHTML === "♡") {
        button.innerHTML = "❤"; 
    } else {
        button.innerHTML = "♡"; 
    }
}

function myfunction4() {
    const button = document.getElementById("select4");
    if (button.innerHTML === "♡") {
        button.innerHTML = "❤"; 
    } else {
        button.innerHTML = "♡"; 
    }
}

function myfunction5() {
    const button = document.getElementById("select5");
    if (button.innerHTML === "♡") {
        button.innerHTML = "❤"; 
    } else {
        button.innerHTML = "♡"; 
    }
}

function myfunction6() {
    const button = document.getElementById("select6");
    if (button.innerHTML === "♡") {
        button.innerHTML = "❤"; 
    } else {
        button.innerHTML = "♡"; 
    }
}

function myfunction7() {
    const button = document.getElementById("select7");
    if (button.innerHTML === "♡") {
        button.innerHTML = "❤"; 
    } else {
        button.innerHTML = "♡"; 
    }
}
 let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    document.querySelectorAll('.item').forEach(item => {
      const itemId = item.getAttribute('data-id');
      const heart = item.querySelector('.heart');

      if (wishlist.includes(itemId)) {
        heart.classList.add('favorited');
        heart.innerHTML = '&#10084;';
      }

      heart.addEventListener('click', () => {
        if (wishlist.includes(itemId)) {
          wishlist = wishlist.filter(id => id !== itemId);
          heart.classList.remove('favorited');
          heart.innerHTML = '&#9825;';
        } else {
          wishlist.push(itemId);
          heart.classList.add('favorited');
          heart.innerHTML = '&#10084;';
        }
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
      });
    });
    // Dropdown mouse events for MEN section
const menDropdown = document.getElementById('menDropdown');
const menMenu = document.getElementById('menMenu');

// Show menu on mouseenter
menDropdown.addEventListener('mouseenter', () => {
  menMenu.style.display = 'flex';
});

// Hide menu on mouseleave
menDropdown.addEventListener('mouseleave', () => {
  menMenu.style.display = 'none';
});
// JavaScript to show/hide the WOMEN dropdown menu on mouseenter/mouseleave
const dropdown = document.getElementById("womenDropdown");
const menu = document.getElementById("womenMenu");

dropdown.addEventListener("mouseenter", () => {
  menu.style.display = "flex";
});

dropdown.addEventListener("mouseleave", () => {
  menu.style.display = "none";
});
document.addEventListener("DOMContentLoaded", function () {
  const kidsDropdown = document.getElementById("kidsDropdown");
  const kidsMenu = document.getElementById("kidsMenu");

  if (!kidsDropdown || !kidsMenu) return;

  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isTouch) {
    kidsDropdown.querySelector("a").addEventListener("click", function (e) {
      e.preventDefault();
      kidsMenu.style.display = (kidsMenu.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", function (e) {
      if (!kidsDropdown.contains(e.target)) {
        kidsMenu.style.display = "none";
      }
    });
  } else {
    kidsDropdown.addEventListener("mouseenter", () => {
      kidsMenu.style.display = "block";
    });

    kidsDropdown.addEventListener("mouseleave", () => {
      kidsMenu.style.display = "none";
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const beautyDropdown = document.getElementById("beautyDropdown");
  const beautyMenu = document.getElementById("beautyMenu");

  if (!beautyDropdown || !beautyMenu) return;

  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isTouch) {
    beautyDropdown.querySelector("a").addEventListener("click", function (e) {
      e.preventDefault();
      beautyMenu.style.display = (beautyMenu.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", function (e) {
      if (!beautyDropdown.contains(e.target)) {
        beautyMenu.style.display = "none";
      }
    });
  } else {
    beautyDropdown.addEventListener("mouseenter", () => {
      beautyMenu.style.display = "block";
    });

    beautyDropdown.addEventListener("mouseleave", () => {
      beautyMenu.style.display = "none";
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const ethnicDropdown = document.getElementById("ethnicDropdown");
  const ethnicMenu = document.getElementById("ethnicMenu");

  if (!ethnicDropdown || !ethnicMenu) return;

  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isTouch) {
    ethnicDropdown.querySelector("a").addEventListener("click", function (e) {
      e.preventDefault();
      ethnicMenu.style.display = (ethnicMenu.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", function (e) {
      if (!ethnicDropdown.contains(e.target)) {
        ethnicMenu.style.display = "none";
      }
    });
  } else {
    ethnicDropdown.addEventListener("mouseenter", () => {
      ethnicMenu.style.display = "block";
    });

    ethnicDropdown.addEventListener("mouseleave", () => {
      ethnicMenu.style.display = "none";
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const westernDropdown = document.getElementById("westernDropdown");
  const westernMenu = document.getElementById("westernMenu");

  if (!westernDropdown || !westernMenu) return;

  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isTouch) {
    westernDropdown.querySelector("a").addEventListener("click", function (e) {
      e.preventDefault();
      westernMenu.style.display = (westernMenu.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", function (e) {
      if (!westernDropdown.contains(e.target)) {
        westernMenu.style.display = "none";
      }
    });
  } else {
    westernDropdown.addEventListener("mouseenter", () => {
      westernMenu.style.display = "block";
    });

    westernDropdown.addEventListener("mouseleave", () => {
      westernMenu.style.display = "none";
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const offersDropdown = document.getElementById("offersDropdown");
  const offersMenu = document.getElementById("offersMenu");

  if (!offersDropdown || !offersMenu) return;

  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isTouch) {
    offersDropdown.querySelector("a").addEventListener("click", function (e) {
      e.preventDefault();
      offersMenu.style.display = (offersMenu.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", function (e) {
      if (!offersDropdown.contains(e.target)) {
        offersMenu.style.display = "none";
      }
    });
  } else {
    offersDropdown.addEventListener("mouseenter", () => {
      offersMenu.style.display = "block";
    });

    offersDropdown.addEventListener("mouseleave", () => {
      offersMenu.style.display = "none";
    });
  }
});

let search = document.getElementById("search");
    search.addEventListener("mouseenter",function() {
        search.style.backgroundColor = "lightcoral";
    });
    search.addEventListener("mouseleave",function(){
        searchx.style.backgroundColor = "blue";
    });