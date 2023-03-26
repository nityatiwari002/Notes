collection = []

let col = 1;
let row = 0;
function NoteAdder(){
    let data = document.getElementById("new-note").value;
    collection.push(data);
    console.log(collection);
    if(col >= 2 && col <= 3){
        document.getElementById("note-row" + row).innerHTML += "<div class=\"note\">"+data+"</div>"
        col++;
    }
    else{
        row++;
        document.getElementById("collection").innerHTML += "<div class=\"note-row\" id=\"note-row"+row+"\"></div>";
        document.getElementById("note-row" + row).innerHTML += "<div class=\"note\">"+data+"</div>"
        col = 2;
    }
}

document.getElementById('add-note').addEventListener("click", NoteAdder);