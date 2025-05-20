function tambah() {
let id = document.getElementById("ayub").value;
let li = document.createElement("li");
li.innerText = id;
li.id = "hapusSaya";
document.getElementById("container").appendChild(li);
}

function hapus() {
    let container = document.getElementById("container");
    let target = document.getElementById("hapusSaya");
    if (target){
        container.removeChild(target);
    } else{
        alert("list belum ada atau sudah di hapus");
    }
}

