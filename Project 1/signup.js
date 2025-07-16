const form = document.getElementById("form1")



form.addEventListener('click', (e)=>{
    e.preventDefault()
    const name1 = form.elements.name
    const lastname = form.elements.lastname
    const dateof = form.elements.dateof
    const email = form.elements.email
    
    let isValid = true

    if(name1.value === ""){
        name1.style.border = "2px solid red"
        isValid=false
    }else{
        name1.style.border = "";
    }

    if(lastname.value === ""){
        lastname.style.border = "2px solid red"
        isValid=false
    }else{
        lastname.style.border = "";
    }
    if(email.value === ""){
        email.style.border = "2px solid red"
        isValid=false
    }else{
        email.style.border = "";
    }
    if(isValid){
        alert("All the fields are filled")
    }
})