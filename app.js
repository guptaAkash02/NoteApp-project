const addBtn = document.querySelector('#addBtn')

const saveNote =()=>{
    const notes = document.querySelectorAll('.note textarea')
    const data =[]
    notes.forEach((note)=>{
        data.push(note.value)
    })
   if(data.length === 0){
     localStorage.removeItem('notes')
   }else{
    localStorage.setItem('notes',JSON.stringify(data))
   }
    
}






const addNote =( text ="")=>{
    const note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML = `
        <div class="tool">
        <i class=" save fa-solid fa-floppy-disk"></i>
        <i class=" trash fa-sharp fa-regular fa-trash"></i>
        </div>
        <textarea>${text}</textarea>
   `
    document.querySelector('#main').appendChild(note)

   note.querySelector('.trash').addEventListener("click",
   ()=>{
    note.remove()
    saveNote()
   }
   )

   note.querySelector('.save').addEventListener("click",
   ()=>{
    saveNote()
   }
   )
 
   note.querySelector('textarea').addEventListener("focusout",
   ()=>{
    saveNote()
   }
   )
   saveNote()

   
}

(
    function(){
        const lsnotes = JSON.parse(localStorage.getItem('notes'))
        if(lsnotes ===null){
            addNote()
        }else{
            lsnotes.forEach((lsnote)=>{
                addNote(lsnote)
            })
        }
       
        
    }

)()
addBtn.addEventListener("click",()=>{
    addNote()
})

