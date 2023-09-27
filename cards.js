document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        const cardBg = card.querySelector(".card-bg");
        const cardContent = card.querySelector(".card-content");
        const dataImage = card.getAttribute("data-image");
        const rotationX = (index % 2 === 0 ? 10 : -10) * (index < 2 ? -1 : 1); // Alternate between positive and negative X rotation
        const rotationY = (index % 2 === 0 ? -10 : 10) * (index % 2 === 0 ? -1 : 1); // Alternate between positive and negative Y rotation

        // Set the background image of the card
        card.style.backgroundImage = `url(${dataImage})`;

        card.addEventListener("mousemove", (e) => {
            const cardWidth = card.offsetWidth;
            const cardHeight = card.offsetHeight;
            const mouseX = (e.pageX - card.getBoundingClientRect().left) - cardWidth / 2;
            const mouseY = (e.pageY - card.getBoundingClientRect().top) - cardHeight / 2;
            const rotateX = -(mouseY / cardHeight) * rotationX;
            const rotateY = (mouseX / cardWidth) * rotationY;

            card.style.transition = "transform 0.1s"; // Add a transition for smoother animation
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener("mouseenter", () => {
            card.style.transition = "transform 0.2s"; // Adjust the transition duration
            card.style.transform = "rotateX(0deg) rotateY(0deg)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transition = "transform 0.2s"; // Adjust the transition duration
            card.style.transform = "rotateX(0deg) rotateY(0deg)";
        });
    });
});
