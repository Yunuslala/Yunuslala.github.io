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
        window.open("https://drive.google.com/file/d/1kysF30lViIkK5HwPjkihHAboxffhxCjX/view?usp=sharing","_blank")

    }
    // document.querySelector(".mobile-menu").addEventListener("click",()=>{
    //     document.querySelector(".mobile-menu").setAttribute("class","show")
    // })

    // https://drive.google.com/file/d/1kysF30lViIkK5HwPjkihHAboxffhxCjX/view?usp=sharing