
function sobre() {
    pagSobre.status = true
    pagSkill.status = false
    pagTrabalhos.status = false
    pagContato.status = false
}

function skills() {
    pagSobre.status = false
    pagSkill.status = true
    pagTrabalhos.status = false
    pagContato.status = false
}

function trabalhos() {
    pagSobre.status = false
    pagSkill.status = false
    pagTrabalhos.status = true
    pagContato.status = false
}


function contato() {
    pagSobre.status = false
    pagSkill.status = false
    pagTrabalhos.status = false
    pagContato.status = true
}


var pagSobre = new Vue({
    el: '#pagSobre',
    data: {
        status: true,
    }
})



var pagSkill = new Vue({
    el: '#pagSkill',
    data: {
        status: false,
    }
})

var pagTrabalhos = new Vue({
    el: '#pagTrabalhos',
    data: {
        status: false,
    }
})

var pagContato = new Vue({
    el: '#pagContato',
    data: {
        status: false,
    }
})



