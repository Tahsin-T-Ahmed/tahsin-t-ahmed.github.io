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

for (var i=0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function(e) {
        overlay.style.display = "block";
        setTimeout(()=>{overlay.style.opacity = "1";}, 1);
        overlayTitle.innerHTML = this.querySelector("text").innerHTML;

        
        getItems(overlayTitle.innerHTML.toLowerCase());
    });
}

function getItems(clickedLink) { 
    var list = linkData[clickedLink];
    console.log(list);
    for (var i=0; i < list.length; i++) { 
        var item = list[i];
        var itemHTML = "";

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

        overlayList.innerHTML += itemHTML; 
    }
}