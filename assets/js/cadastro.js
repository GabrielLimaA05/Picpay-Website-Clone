const url = 'https://api-go-wash-efc9c9582687.herokuapp.com/api/user';

async function cadastroUsuario(){   
    let nomeCadastro = document.getElementById('nomeCadastro');
    let cpfCadastro = document.getElementById('cpfCadastro');
    let emailCadastro = document.getElementById('emailCadastro');
    let birthdayCadastro = document.getElementById('birthdayCadastro');
    let senhaCadastro = document.getElementById('senhaCadastro');
    let checkboxCadastro = document.getElementById("checkboxCadastro")
    let termos = 0

    if(checkboxCadastro.checked == true){
        termos = 1
    }else{
        termos = 0
    }

     // Verifica se algum campo está vazio, e se estiver, ele fica em vermelho, caso não esteja, ele fica verde.


     if (!nomeCadastro.value || !cpfCadastro.value || !emailCadastro.value || !birthdayCadastro.value || !senhaCadastro.value) {
        alert("Por favor, preencha todos os campos.");
        if (!nomeCadastro.value) {
            nomeCadastro.style.borderColor = "red";
        } else {
            nomeCadastro.style.borderColor = "green";
        }
        if (!cpfCadastro.value) {
            cpfCadastro.style.borderColor = "red";
        } else {
            cpfCadastro.style.borderColor = "green";
        }
        if (!emailCadastro.value) {
            emailCadastro.style.borderColor = "red";
        } else {
            emailCadastro.style.borderColor = "green";
        }
        if (!birthdayCadastro.value) {
            birthdayCadastro.style.borderColor = "red";
        } else {
            birthdayCadastro.style.borderColor = "green";
        }
        if (!senhaCadastro.value) {
            senhaCadastro.style.borderColor = "red";
        } else {
            senhaCadastro.style.borderColor = "green";
        }
        return;
    }



    let response = await fetch(url,{
        method:"POST",
        body:JSON.stringify(
            {
                "name": nomeCadastro.value,
                "email": emailCadastro.value,
                "user_type_id":1,
                "password": senhaCadastro.value,
                "cpf_cnpj": cpfCadastro.value,
                "terms": termos,
                "birthday": birthdayCadastro.value    
            }
        ),
        headers:{
            'Content-Type': 'application/json'
        }        
    });

    if (!response.ok) {

        let errorMessage = "";

        if (response.data?.errors.name) {
            errorMessage += respostaErro.data.errors.name[0] + "\n";
        }
        
        if (response.data?.errors.cpf_cnpj) {
            errorMessage += respostaErro.data.errors.cpf_cnpj[0] + "\n";
        }
        
        if (response.data?.errors.email) {
            errorMessage += respostaErro.data.errors.email[0] + "\n";
        }
        
        if (response.data?.errors.birthday) {
            errorMessage += respostaErro.data.errors.birthday[0] + "\n";
        }
        
        if (response.data?.errors.password) {
            errorMessage += respostaErro.data.errors.password[0] + "\n";
        }
        
        alert(errorMessage);
        
    } else {
        alert("Cadastro feito com sucesso");
        window.location.href = "login.html";
    }
}
