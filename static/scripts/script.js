document.getElementById("userForm").addEventListener("submit", function (event) {
    var nameInput = document.getElementById("name");
    if (nameInput.value.trim() === "") {
        event.preventDefault();
        alert("Please enter a username.");
    }
});
