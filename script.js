const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('animation');
        // console.log("hi")
      }
    });
});

document.querySelectorAll('.percent').forEach((element => {
    observer.observe(element);
}))

observer.observe(document.querySelector(".imgBox"))