const isDark = localStorage.getItem("dark-mode") === "true";
if (isDark) document.body.classList.add("dark-mode");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "dark-mode",
    document.body.classList.contains("dark-mode")
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("darkbutton");
  if (btn) btn.addEventListener("click", toggleDarkMode);
});
