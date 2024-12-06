// const toggleClass = () => {
//   console.log("Hello");
//   const nav__mobile = document.getElementById("nav__mobile");
//   const nav__active = nav__mobile.getElementsByClassName("nav__active");
//   if (nav__active.length > 0) {
//     nav__mobile.classList.remove("nav__active");
//   } else {
//     nav__mobile.classList.add("nav__active");
//   }
//   if (nav__mobile) {
//     nav__mobile.classList.add("active");
//     nav__mobile.style.backgroundColor = "orange";
//   }
//   console.log(nav__mobile);
// };

document.querySelector("bar").addEventListener("click", handleClick);

function handleClick() {
  alert("hey, I got clicked");
}
