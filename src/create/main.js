document.getElementById('done').addEventListener('click', (e) => {
    if(document.getElementById('form').checkValidity()){
        document.getElementById('form').submit();
    }
})
