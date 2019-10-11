/**
 * CONFIGURACOES DO FIREBASE
 */
var firebaseConfig = {
  apiKey: "AIzaSyDyRLghpOVv6eEqz37Fo1fEe6Wk53qZCFE",
  authDomain: "palacio-1546964719574.firebaseapp.com",
  databaseURL: "https://palacio-1546964719574.firebaseio.com",
  projectId: "palacio-1546964719574",
  storageBucket: "palacio-1546964719574.appspot.com",
  messagingSenderId: "561892950747",
  appId: "1:561892950747:web:454ef6ed5d85f8fcce82fe"
};

//  - INICIALIZA O FIREBASE
firebase.initializeApp(firebaseConfig);


const db = firebase.database().ref();  //  - INSTANCIA DO BANCO
const teste = db.child("recrutamento/" + dataHJ); // DEFINE O ROOT

// ACAO QUANDO UM NO VO REGISTRO E ADICIONADO
testesRef.on("child_added", snap => {
  M.toast({ html: "Novo teste liberado!" });
});

/**
 * REGISTRAR UM NOVO TESTE
 * 
 * REGISTRA UM NOVO TESTE NO SISTEMA
 */
function registrarTeste(){
  
}

/**
 * GET HORA AGORA
 * 
 * RETORNA HORA NO MOMENTO DO GET
 * 
 * @return tempo
 */
function getHoraAgora() {
  let tempo = new Date();
  var hora = data.getHours(); // 0-23
  var min = data.getMinutes(); // 0-59
  var seg = data.getSeconds(); // 0-59
  tempo = hora + ":" + min + ":" + seg;
  return tempo;
}

/**
 * GET DIA MES E ANO
 * 
 * RETORNA A DATA NO FORMATO DD_MM_AAAA
 * 
 * @return data
 */
function getDiaMesAno(){
  var data = new Date();
  var dia = data.getDate(); // 1-31
  var mes = data.getMonth(); // 0-11 (zero=janeiro)
  var ano2 = data.getFullYear(); // 2 dígitos
  var dataHJ = dia + "_" + mes + "_" + ano2;
  return dataHJ
}

function gravar(nome, word, excel, cadastro, tempo, hrInicio, hrFinal) {
  testesRef.push({
    nome: 1,
    word: {
      obs: "",
      situacao: ""
    },
    excel: {
      obs: "",
      situacao: "",
      formulaMult: "",
      formulaSoma: ""
    },
    cadastro: "aprovado",
    tempo: 4
  });
}

