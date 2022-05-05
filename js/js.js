function newElement() {
    const taskInput = document.getElementById("task")
    let text = taskInput.value
    if (text == ""){
        $('#liveToastError').toast('show')
        return;
        // Boş değer girilirse Listeye boş ekleme yapamazsınız! yazısını bootstrap ile alıcaz
    }
    else {
    let ul = document.getElementById("list")
    ul.innerHTML += `<li class='checked::before' onClick=changeChecked()>
    ${text}
     <button class='btn btn-danger float-right' id='delete' onclick='removeItem()'>X</button>
   </li>`
   // Değer ekleme işlemi
   $('#liveToast').toast('show')
// Değer girilirse Listeye eklendi. yazısını bootsrap ile alıcaz
}
    
}

function removeItem() {
    event.currentTarget.parentElement.remove();
    // Değeri kaldırma işlemi
}

function changeChecked() {
    if (event.currentTarget.className ==='checked::before'){
        event.currentTarget.className = 'checked';
        
    }
    else{
        event.currentTarget.className = 'checked::before';
    }
    
    // Değeri işaretleme işlemi
}