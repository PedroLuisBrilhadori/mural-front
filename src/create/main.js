document.getElementById('done').addEventListener('click', (e) => {
    if( grecaptcha.getResponse() != ''){
        if(document.getElementById('form').checkValidity()){
            document.getElementById('form').submit();
        }
    } else 
        window.alert('Confirme o CAPTCHA, por favor!');
})

if(location.search){
    if(location.search.indexOf('true') > -1){
        if(window.confirm('Menssagem enviada!!'))
            location.search = '';
        else 
            location.search = '';
        } 
        else {
            if(window.confirm('Ocorreu um erro, menssagem não enviada!'))
                location.search = '';
            else 
                location.search = '';
    } 
}