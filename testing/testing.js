import { getDatabase, onValue, set } from 'firebase/database';
import { app } from '../config/init-firebase';
import { ref } from 'firebase/database';


const db = getDatabase(app);

function writeUserData(userID=12345, name="random", pemail="private@example.com") {
    set(ref(db, 'users/' + userID), {
        username: name,
        email: pemail
    });
}

writeUserData();

var userID = 12345

const readUserData = ref(db, 'users/' + userID);
onValue(readUserData, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
})
