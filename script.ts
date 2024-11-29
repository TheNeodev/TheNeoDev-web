const links = document.querySelectorAll<HTMLAnchorElement>(".link");

links.forEach(link => {
  link.addEventListener("click", () => {
    console.log(`Redirecting to: ${link.href}`);
  });
});


