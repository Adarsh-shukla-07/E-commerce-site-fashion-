// Select the main section of the page
let mainpage = document.querySelector('.main'); 

// Select all elements with the class "trend" (likely representing individual cards or items)
let card = document.querySelectorAll(".trend"); 

// Select the element representing the blogs section
let blogs = document.querySelector('.Trends');

// Home function: Activates the "Home" section and hides other sections
function home() {     
    // Highlight the "Home" navigation tab
    document.getElementById("home").style.color = "rgb(17, 212, 212)";
    
    // Reset the color for other navigation tabs
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("shops").style.color = "black";

    // Hide "About" and "Contact" sections
    document.querySelector(".about").style.display = "none";
    document.querySelector(".contact").style.display = "none";
    
    // Display all "trend" cards
    card.forEach(element => {
        element.style.display = "block";
    });

    // Display the "Blogs" and "Main" sections
    blogs.style.display = "block";
    mainpage.style.display = "flex";  
}

// Blog function: Activates the "Blog" section and hides other sections
function blog() {
    // Hide the main section and all cards
    mainpage.style.display = "none";  
    card.forEach(element => {
        element.style.display = "none";
    });

    // Display the blog section
    blogs.style.display = "block";

    // Reset navigation tab colors and highlight "Blog"
    document.getElementById("home").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("blog").style.color = "rgb(17, 212, 212)";
    document.getElementById("shops").style.color = "black";

    // Hide the "Contact" and "About" sections
    document.querySelector(".contact").style.display = "none";
    document.querySelector(".about").style.display = "none";
}

// Shops function: Activates the "Shops" section and hides other sections
function shops() {
    // Hide the main and blog sections
    mainpage.style.display = "none";  
    blogs.style.display = "none";     

    // Display all shop-related cards
    card.forEach(element => {
        element.style.display = "block";
    });

    // Reset navigation tab colors and highlight "Shops"
    document.getElementById("home").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("shops").style.color = "rgb(17, 212, 212)";
    
    // Hide the "Contact" and "About" sections
    document.querySelector(".contact").style.display = "none";
    document.querySelector(".about").style.display = "none";
}

// About function: Activates the "About" section and hides other sections
function abouts() {
    // Highlight "About" navigation tab
    document.getElementById("about").style.color = "rgb(17, 212, 212)";
    
    // Reset the color for other navigation tabs
    document.getElementById("home").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("shops").style.color = "black";

    // Display the "About" section
    document.querySelector(".about").style.display = "block";

    // Hide other sections
    mainpage.style.display = "none";  
    card.forEach(element => {
        element.style.display = "none";
    });
    blogs.style.display = "none";
    document.querySelector(".contact").style.display = "none";
}

// Contact function: Activates the "Contact" section and hides other sections
function contact() {
    // Highlight "Contact" navigation tab
    document.getElementById("contact").style.color = "rgb(17, 212, 212)";
    
    // Reset the color for other navigation tabs
    document.getElementById("home").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("shops").style.color = "black";

    // Display the "Contact" section
    document.querySelector(".contact").style.display = "block";

    // Hide other sections
    mainpage.style.display = "none";  
    card.forEach(element => {
        element.style.display = "none";
    });
    blogs.style.display = "none";
    document.querySelector(".about").style.display = "none";
}
