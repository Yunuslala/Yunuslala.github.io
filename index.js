const toggle = document.querySelector(".mobile-menu")
const header = document.querySelector(".navbar")

const  toggleleNavebar = () =>{
    header.classList.toggle("active")
}
toggle.addEventListener("click", ()=> {
    toggleleNavebar()
}
)

    // GitHubCalendar(".calendar", "Yunuslala");
    // GitHubCalendar(".calendar", "Yunuslala", { responsive: true });

    function downloadresume(){
        window.open("https://export-download.canva.com/yOKTU/DAFZPIyOKTU/110/0-3852512693.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20230216%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230216T191618Z&X-Amz-Expires=67054&X-Amz-Signature=1f6a9c21edb5a2af6ef3d4b064a43916a4dd3c82f4483adf55fcf4d686e763f2&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Mohd.-Yunus-Resume.pdf&response-expires=Fri%2C%2017%20Feb%202023%2013%3A53%3A52%20GMT")

    }
    // document.querySelector(".mobile-menu").addEventListener("click",()=>{
    //     document.querySelector(".mobile-menu").setAttribute("class","show")
    // })