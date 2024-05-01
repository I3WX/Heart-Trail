const body = document.querySelector("body");

// Event listener to track mouse movement
body.addEventListener("mousemove",(event)=>{

    const xPostion = event.offsetX; // Getting the horizontal position of the mouse relative to the target element
    const yPostion = event.offsetY; // Getting the vertical position of the mouse relative to the target element

    const spanElm = document.createElement("span"); // Creating a new span element

    spanElm.style.left = xPostion + "px"; // Setting the left position of the span
    spanElm.style.top = yPostion + "px"; // Setting the top position of the span

    const random_size  =Math.random()*100; // Generating a random size for the heart
    spanElm.style.width = random_size + "px"; // Setting the width of the span
    spanElm.style.height = random_size + "px"; // Setting the height of the span

    body.appendChild(spanElm); // Appending the span to the body
    setTimeout(()=>{
        spanElm.remove(); // Removing the span after 10 seconds
    },10000);
});
