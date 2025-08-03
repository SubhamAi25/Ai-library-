const sidebar = document.getElementById("sidebar");
const main_section = document.getElementById("main-section");
const sidebar_active_btn = document.getElementById("sidebar-active-btn");
const sidebar_close_btn = document.getElementById("sidebar-close-btn");
const sidebar_active_btn_parent = document.getElementById("sidebar-active-btn-parent");


sidebar_active_btn.addEventListener("click", () => {
    if (window.innerWidth > 1280) {
        sidebar.classList.add("xl:block")
        sidebar_active_btn_parent.classList.add("xl:hidden");

        main_section.classList.add("col-span-13", "xl:col-span-11");
        main_section.classList.remove("col-span-13");
    } else {
        sidebar.classList.remove("hidden", "col-span-2", "xl:block");
        sidebar.classList.add("absolute", "fixed", "w-[15rem]", "h-[100vh]");
    }
});

sidebar_close_btn.addEventListener("click", () => {
    if (window.innerWidth > 1280) {
        sidebar.classList.remove("xl:block")
        sidebar_active_btn_parent.classList.remove("xl:hidden");
        
        main_section.classList.remove("col-span-13", "xl:col-span-11");
        main_section.classList.add("col-span-13");
    } else {
        sidebar.classList.add("hidden", "col-span-2", "xl:block");
        sidebar.classList.remove("absolute", "fixed", "w-[15rem]", "h-[100vh]");
    }
});