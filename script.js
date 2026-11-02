const heading = document.querySelector("h3")
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    heading.scrollIntoView({
        behavior: "smooth",
    });
});
const credits = document.querySelector("#credits");
const openCredits = document.querySelector("#openCredits");
const closeCredits = document.querySelector("#closeCredits");

openCredits.addEventListener("click", () => {
  credits.showModal();
});

closeCredits.addEventListener("click", () => {
  credits.close();
});
