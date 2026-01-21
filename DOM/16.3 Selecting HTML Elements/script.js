// ===================================
// CLASSIC getElementBy SELECTORS
// ===================================

// getElementById (single element)
const title = document.getElementById("mainTitle");

// getElementsByTagName (multiple elements)
const paragraphsByTag = document.getElementsByTagName("p");

// getElementsByClassName (multiple elements)
const paragraphsByClass = document.getElementsByClassName("text");

// ===================================
// MODERN SELECTORS
// ===================================

// querySelector (first match only)
const firstParagraph = document.querySelector(".text");

// querySelectorAll (all matches)
const allParagraphs = document.querySelectorAll(".text");

// ===================================
// BUTTONS
// ===================================
document.getElementById("btnId").addEventListener("click", function () {
    title.textContent = "Changed using getElementById()";
    title.style.color = "green";
});

document.getElementById("btnTag").addEventListener("click", function () {
    for (let i = 0; i < paragraphsByTag.length; i++) {
        paragraphsByTag[i].style.backgroundColor = "yellow";
    }
});

document.getElementById("btnClass").addEventListener("click", function () {
    for (let i = 0; i < paragraphsByClass.length; i++) {
        paragraphsByClass[i].style.color = "blue";
    }
});

document.getElementById("btnQuery").addEventListener("click", function () {
    firstParagraph.textContent = "Selected using querySelector()";
    firstParagraph.style.fontWeight = "bold";
});

document.getElementById("btnQueryAll").addEventListener("click", function () {
    allParagraphs.forEach(function (p) {
        p.textContent = "Changed using querySelectorAll()";
        p.style.backgroundColor = "#c8f7c5";
    });
});
