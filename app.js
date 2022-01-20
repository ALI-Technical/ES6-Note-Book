const tileInput = document.getElementById("tile-input");
const descInput = document.getElementById("Desc-input");
const notes_box = document.getElementById("notes-box");

const addItem = () => {
    if (tileInput.value != "" && descInput.value!=""){
        let section = document.createElement("section");
        section.classList = "col-lg-3 col-md-5 col-sm-12 animate__animated animate__fadeInDown"
        notes_box.appendChild(section);
        let h4 = document.createElement("h4");
        h4.innerHTML = tileInput.value;
        section.appendChild(h4);
        let p = document.createElement("p");
        p.innerHTML = descInput.value;
        section.appendChild(p);
        var div = document.createElement("div");
        div.setAttribute("class", "user-div");
        let del = document.createElement("i");
        del.setAttribute("onclick", "deleteBox(this)");
        del.classList = "fas fa-minus-circle";
        let edit = document.createElement("i");
        edit.setAttribute("onclick", "editBox(this)")
        edit.classList = "far fa-edit";
        del.style.cursor="pointer";
        edit.style.cursor="pointer";
        div.appendChild(del);
        div.appendChild(edit);
        section.appendChild(div);
        
        var div = document.createElement("div");
        div.className="box-line";
        section.insertBefore(div,p);
        /* console.log(notes_box);*/
        tileInput.value = "";
        descInput.value = "";
    }
    else{
        alert("Fill This Fields");
    }
}

const deleteAll = () => {
    tileInput.value = "";
    descInput.value = "";
    notes_box.innerHTML = "";
}

const deleteBox = (e) => {
    e.parentNode.parentNode.remove();
}

const editBox = (e) => {
    let title = prompt("Enter Title", e.parentNode.parentNode.childNodes[0].innerHTML);
    let desc = prompt("Enter Description", e.parentNode.parentNode.childNodes[2].innerHTML);
    e.parentNode.parentNode.childNodes[0].innerHTML=title;
    e.parentNode.parentNode.childNodes[2].innerHTML=desc;
}