var total2;
var num = parseInt(document.getElementById("num").value);
var d40 = 4 * num;
var d60 = 6 * num;
var d80 = 8 * num;
var d1 = 10 * num;
var d120 = 12 * num;
var d2 = 20 * num;
var d10 = 100 * num;
var d20d;
var d4d;
var d6d;
var d100d;
var d8d;
var d10d;
var d12d;
var total = 0;
var count = 0;
var d4 = document.getElementById("d4");
var d6 = document.getElementById("d6");
var d8 = document.getElementById("d8");
var d10 = document.getElementById("d10");
var d12 = document.getElementById("d12");
var d20 = document.getElementById("d20");
var d100 = document.getElementById("d100");

function w() {
    count = 0;
    total = 0;
    while (count < document.getElementById("num").value) {
        if (d4.checked == true) {
            d4d = Math.ceil(Math.random() * 4);
            total = parseInt(total) + parseInt(d4d);
        }

        if (d6.checked == true) {
            d6d = Math.ceil(Math.random() * 6);
            total = parseInt(total) + parseInt(d6d);
        }

        if (d8.checked == true) {
            d8d = Math.ceil(Math.random() * 8);
            total = parseInt(total) + parseInt(d8d);
        }

        if (d10.checked == true) {
            d10d = Math.ceil(Math.random() * 10);
            total = parseInt(total) + parseInt(d10d);
        }

        if (d12.checked == true) {
            d12d = Math.ceil(Math.random() * 12);
            total = parseInt(total) + parseInt(d12d);
        }

        if (d20.checked == true) {
            d20d = Math.ceil(Math.random() * 20);
            total = parseInt(total) + parseInt(d20d);
        }

        if (d100.checked == true) {
            d100d = Math.ceil(Math.random() * 100);
            total = parseInt(total) + parseInt(d100d);
        }
        count++;
    }
    console.log(total);
    document.getElementById("d").innerHTML = ("You rolled a " + total);
    if (total == total2) {
        document.getElementById("d").innerHTML = ("You rolled a " + total + " again");
    }
    total2 = total;
    document.getElementById("d").style.color = "black";

    num = parseInt(document.getElementById("num").value);

    if (total == num) {
        document.getElementById("d").style.color = "red";
    }

    if (d4.checked == true) {
        d40 = 4 * num;
        if (total == d40) {
            document.getElementById("d").style.color = "green";
        }
    }

    if (d6.checked == true) {
        d60 = 6 * num;
        if (total == d60) {
            document.getElementById("d").style.color = "green";
        }
    }

    if (d8.checked == true) {
        d80 = 8 * num;
        if (total == d80) {
            document.getElementById("d").style.color = "green";
        }
    }

    if (d10.checked == true) {
        d1 = 10 * num;
        if (total == d1) {
            document.getElementById("d").style.color = "green";
        }
    }

    if (d12.checked == true) {
        d120 = 12 * num;
        if (total == d120) {
            document.getElementById("d").style.color = "green";
        }
    }

    if (d20.checked == true) {
        d2 = 20 * num;
        if (total == d2) {
            document.getElementById("d").style.color = "green";
        }
    }

    if (d100.checked == true) {
        d10 = 100 * num;
        if (total == d10) {
            document.getElementById("d").style.color = "green";
        }
    }
}

function d4f() {
    if (d4.checked == true) {
        d6.checked = false;
        d8.checked = false;
        d10.checked = false;
        d12.checked = false;
        d20.checked = false;
        d100.checked = false;
    }
}

function d6f() {
    if (d6.checked == true) {
        d4.checked = false;
        d8.checked = false;
        d10.checked = false;
        d12.checked = false;
        d20.checked = false;
        d100.checked = false;
    }
}

function d8f() {
    if (d8.checked == true) {
        d6.checked = false;
        d4.checked = false;
        d10.checked = false;
        d12.checked = false;
        d20.checked = false;
        d100.checked = false;
    }
}

function d10f() {
    if (d10.checked == true) {
        d6.checked = false;
        d8.checked = false;
        d4.checked = false;
        d12.checked = false;
        d20.checked = false;
        d100.checked = false;
    }
}

function d12f() {
    if (d12.checked == true) {
        d6.checked = false;
        d8.checked = false;
        d10.checked = false;
        d4.checked = false;
        d20.checked = false;
        d100.checked = false;
    }
}

function d20f() {
    if (d20.checked == true) {
        d6.checked = false;
        d8.checked = false;
        d10.checked = false;
        d12.checked = false;
        d4.checked = false;
        d100.checked = false;
    }
}

function d100f() {
    if (d100.checked == true) {
        d6.checked = false;
        d8.checked = false;
        d10.checked = false;
        d12.checked = false;
        d20.checked = false;
        d4.checked = false;
    }
}

// Function to save notes
function saveNotes() {
    var notes = document.getElementById("noteEditor").value;
    // Here, you can implement saving functionality using localStorage, database, etc.
    // For example:
    // localStorage.setItem("notes", notes);
    alert("Notes saved!");
}

// Function to copy notes to clipboard
function copyToClipboard() {
    var notes = document.getElementById("noteEditor").value;
    navigator.clipboard.writeText(notes)
        .then(function() {
            alert("Notes copied to clipboard!");
        })
        .catch(function(error) {
            console.error("Unable to copy notes: ", error);
            alert("Failed to copy notes to clipboard!");
        });
}