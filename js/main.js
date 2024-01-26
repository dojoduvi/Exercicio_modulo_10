$(document).ready(function(){

    //DEFININDO AS MÁSCARAS
    $('#txtFone').mask('(00) 00000-0000',{placeholder: '(__) _____-____'});
    $('#txtCPF').mask('000.000.000-00',{placeholder: '___.___.___-__'});
    $('#txtCEP').mask('00000-000',{placeholder: '_____-___'});

    $('#frmUsuario').validate({
        rules: { //deve se usar o "NAME e não o ID do campo"
            txtNome:{ required: true },
            txtEmail:{ required: true, email: true },
            txtFone:{ required: true },
            txtCPF:{ required: true },
            txtEndereco:{ required: true },
            txtCEP:{ required: true }
        },
        messages: {
            txtNome: 'O campo Nome é obrigatório',
            txtEmail: 'O campo Email é obrigatório',
            txtFone: 'O campo Telefone é obrigatório',
            txtCPF: 'O campo CPF é obrigatório',
            txtEndereco: 'O campo Endereço é obrigatório',
            txtCEP: 'O campo CEP é obrigatório'
        },
        submitHandler: function(form){
            alert('Cadastro realizado com sucesso!');

            txtNome.value = '';
            txtEmail.value = '';
            txtFone.value = '';
            txtCPF.value = '';
            txtEndereco.value = '';
            txtCEP.value = '';
        },
        invalidHandler: function(e,validador){
            if (validador.numberOfInvalids()){
                alert(`Existem "${validador.numberOfInvalids()}" campos incorretos! Por favor, corrija antes de prosseguir.`);
            }
        }
    })

});