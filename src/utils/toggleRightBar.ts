export default function toggleRightBar(s: boolean) {
    const rightBar = document.querySelector("#rightBar");
    console.log(rightBar);
    if (rightBar)
        if (s) {
            rightBar.classList.add("invisible");
        } else {
            rightBar.classList.remove("invisible");
        }
}