if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});

var delay = 1000;

function dot() {
  var iconDot = document.querySelector(".dot");
  iconDot.classList.add("dot-typing");
}

function dots() {
  var iconDots = document.querySelector(".dots");
  iconDots.classList.add("dots-typing");
}

function notif() {
  var notification = document.querySelector(".notification");
  notification.classList.add("notif-in");
}

function text() {
  var thistext = document.querySelector(".text");
  thistext.classList.add("text-act");
}

function newMsg() {
  setTimeout(function() { dot(); dots(); }, delay);
  setTimeout(function() { notif(); }, delay*3.6);
  setTimeout(function() { text(); }, delay*4.2);
};

newMsg();

window.addEventListener('load', (event) => {
  console.log('Welcome to my world!');

  tippy('.tooltip', {
    animation: 'fade',
    duration: [400, 350]
  });
});
