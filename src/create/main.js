document.getElementById('done').addEventListener('click', (e) => {
    if(document.getElementById('form').checkValidity()){
        document.getElementById('form').submit();
    }
})

if(location.search){
    if(location.search.indexOf('true') < -1){
        window.alert('Ocorreu um erro, menssagem não criada')
    } else {
        window.alert('Menssagem enviada!!')
        location.search = '';
    } 
}