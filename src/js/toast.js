import Toastify from "toastify-js";

import "toastify-js/src/toastify.css";

export function success(
  text,
  bg = "linear-gradient(to right, #00b09b, #96c93d)",
  duration = 1500,
  stop = false,
  close = true
) {
  Toastify({
    text: text,
    duration: duration,
    close: close,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: stop, // Prevents dismissing of toast on hover
    style: {
      background: bg,
    },
  }).showToast();
}
export function error(
  text,
  bg = "red",
  duration = 1500,
  stop = false,
  close = true
) {
  Toastify({
    text: text,
    duration: duration,
    close: close,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: stop, // Prevents dismissing of toast on hover
    style: {
      background: bg,
    },
  }).showToast();
}
export function warning(
  text,
  bg = "yellow",
  duration = 1500,
  stop = false,
  close = true
) {
  Toastify({
    text: text,
    duration: duration,
    close: close,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: stop, // Prevents dismissing of toast on hover
    style: {
      background: bg,
    },
  }).showToast();
}
export function primary(
  text,
  bg = "blue",
  duration = 1500,
  stop = false,
  close = true
) {
  Toastify({
    text: text,
    duration: duration,
    close: close,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: stop, // Prevents dismissing of toast on hover
    style: {
      background: bg,
    },
  }).showToast();
}
