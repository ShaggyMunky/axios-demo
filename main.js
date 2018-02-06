console.log("Main.js loaded");

const BASE_URL = "http://api.reactprototypes.com";
const API_KEY = "?key=testuser1234";

axios.get(BASE_URL + "/todos" + API_KEY).then((resp) => {
    console.log("response", resp);
}).catch((err) =>{
        console.log("ERROR", err);
});

const newItem = {
    title: "The Struggle",
    details: "is real"
};
//
// axios.post(BASE_URL + "/todos" + API_KEY, newItem).then(resp =>{
//     console.log("add response:", resp);
// }).catch(err =>{
//     cosole.log("ERROR:", err);
// });