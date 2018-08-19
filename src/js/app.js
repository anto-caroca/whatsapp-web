window.onload = ()=>{
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            //Si estamos logueados
            logout.style.display = "inline-block";
            console.log("User > "+JSON.stringify(user));
            console.log(user.email);
            let displayName = document.getElementById('displayName');
            console.log(displayName);
           // document.getElementById("emailP").innerHTML = user.email;
            
        }else{
            // no estamos logueados
            logout.style.display = "none";
        }
    });
  }

let message = document.getElementById('inputMessage');
let displayMessage = document.getElementById('col4');

message.addEventListener('keypress', function (e) {
    const key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      // code for enter
      displayMessage.innerHTML = message.value;
      message.value='';
    }
});

const firestore = firebase.firestore();
 const settings = {/* your settings... */ 
   timestampsInSnapshots: true};
 firestore.settings(settings);

/*  const timestamp = snapshot.get('created_at');
 const date = timestamp.toDate();*/

 // Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function guardarTarjeta(){

 message.value;

 db.collection("chat").add({
   displayName: displayName,
   message: message
 })
 .then(function(docRef) {
   //console.log("Document written with ID: ", docRef.id);
   document.getElementById("message").value="";
 })
 .catch(function(error) {
   console.error("Error adding document: ", error);
   
 });

}

//leer info tarjetas
 
db.collection("users").onSnapshot((querySnapshot) => { //se reemplaza get x onSnapshot para obtener actualizaciones en tiempo real. Tambien se saca .then
displayMessage.innerHTML="";
 querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().userName}`);
     console.log(`${doc.id} => ${doc.data().message}`);
     displayMessage.innerHTML += `
     <div>
         <p>${doc.data().message}</p>
         <p>${doc.data().userName}</p>
     </div>
     `
 });
});