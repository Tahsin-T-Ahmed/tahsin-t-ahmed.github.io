let overlay = document.querySelector("#overlay"),
    overlayContent = document.querySelector("#overlay-content"),
    overlayTitle = document.querySelector("#overlay-title"),
    overlayList = document.querySelector("#overlay-list");

function hideOverlay() {    
    overlay.style.opacity = 0;
    setTimeout(()=>{overlay.style.display = "none";}, 500);
}

hideOverlay();

function clearOverlay() {
    overlayTitle.innerHTML = "";
    overlayList.innerHTML = "";
}

document.querySelector("#exit").addEventListener("click", function() {
    hideOverlay();
    setTimeout(clearOverlay, 500);
});

let navLinks = document.querySelectorAll("#orbits-container a");

//Add event listeners to nav links
for (var i=0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function(e) {
        //display overlay
        overlay.style.display = "block";
        setTimeout(()=>{overlay.style.opacity = "1";}, 1);
        overlayTitle.innerHTML = this.querySelector("text").innerHTML;

        //populate overlay with data
        getItems(overlayTitle.innerHTML.toLowerCase());
    });
}

function getItems(clickedLink) { 
    //get info from data.js
    var list = linkData[clickedLink];

    //populate overlay with data.js object
    for (var i=0; i < list.length; i++) { 
        //each "item" is a tile's key-value object
        var item = list[i];

        //itemHTML will contain the markup code for each tile
        var itemHTML = "";

        //processing itemHTML's markup
        itemHTML += "<li>";
        item.link ? itemHTML += `<a href="${item.link}">` : "";
        itemHTML +=
            `<h4>${item.title}</h4>
            <figure>
                ${item.preview}`

            item.caption ? itemHTML += `<figcaption>${item.caption}</figcaption>`: "";
            itemHTML += "</figure>";
            item.link ? itemHTML += "</a>" : "";
        itemHTML += "</li>";

        console.log(itemHTML);

        //adding itenHTML to webpage
        overlayList.innerHTML += itemHTML; 
    }
}