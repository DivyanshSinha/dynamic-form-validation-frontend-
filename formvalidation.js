function validation(){

    var username = document.getElementById('username').Value;
    
    if(username = ''){
        document.getElementById('usernameError').innerHTML = "Username should be greater than 3 charecters";
        alert('required');
        return false;
    }
}