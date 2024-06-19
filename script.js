const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e)=> {
    let messages =[]
    if(Name.value === '' || Name.value ==null){
        messages.push('Name is required')
    }

    if(messages.length >0){
    e.preventDefault()
    errorElement.innerText = messages.join(', ')

    }

    if(email.value.length <= 6){
        messages.push('Email must be longer than 6 characters')
    }

    if (email,value === 'password'){
        messages.push('email cannot be password')
    }
})
