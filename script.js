const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => 
      entry.isIntersecting && entry.target.classList.add('animation')
    );
});

document.querySelectorAll('.percent').forEach((element => observer.observe(element)))
observer.observe(document.querySelector(".imgBox"))