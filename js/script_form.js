const controls = document.querySelectorAll(".form-control")

controls.forEach(control => control.addEventListener("input", _ => {
    control.classList.add("activated")
}))

