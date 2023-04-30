function closeDropdown() {
    setTimeout(function () {
        $(".dropdown .dropdown-content").removeClass("show");
        $(".dropdown .caret-down").removeClass("rotate");
    }, 250);
}