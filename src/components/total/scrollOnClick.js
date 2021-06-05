export function scroll(el){
    const scrollToElement = document.querySelector(el);


    scrollToElement && scrollToElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
}