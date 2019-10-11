var firebaseConfig = {
  apiKey: "AIzaSyDyRLghpOVv6eEqz37Fo1fEe6Wk53qZCFE",
  authDomain: "palacio-1546964719574.firebaseapp.com",
  databaseURL: "https://palacio-1546964719574.firebaseio.com",
  projectId: "palacio-1546964719574",
  storageBucket: "palacio-1546964719574.appspot.com",
  messagingSenderId: "561892950747",
  appId: "1:561892950747:web:454ef6ed5d85f8fcce82fe"
};

firebase.initializeApp(firebaseConfig);

//data
var data = new Date();
var dia = data.getDate(); // 1-31
var mes = data.getMonth(); // 0-11 (zero=janeiro)
var ano2 = data.getFullYear(); // 2 dígitos
var dataHJ = dia + "_" + mes + "_" + ano2;

const dbRef = firebase.database().ref();
const testesRef = dbRef.child("recrutamento/" + dataHJ);

testesRef.on("child_added", snap => {
  M.toast({ html: "Novo teste liberado!" });
});

function getHoraAgora() {
  let tempo = new Date();
  var hora = data.getHours(); // 0-23
  var min = data.getMinutes(); // 0-59
  var seg = data.getSeconds(); // 0-59
  tempo = hora + ":" + min + ":" + seg;
  return tempo;
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

