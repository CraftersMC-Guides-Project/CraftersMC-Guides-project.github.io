// function toggleContent(element) {
//     const content = element.nextElementSibling;
//     content.classList.toggle("active");
// }

function toggleContent(element) {
    const content = element.querySelector(".content");
    if (content) {
        content.classList.toggle("active");
    }
}
