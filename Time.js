import firebase from 'firebase';

const Dataable = [''];
const firebaseConfig = {
  apiKey: 'AIzaSyBsK5mCkJtRw6Jczn8S7W0WIvBQZu__aJE',
  authDomain: 'ncupractice.firebaseapp.com',
  projectId: 'ncupractice',
  storageBucket: 'ncupractice.appspot.com',
  messagingSenderId: '882893947998',
  appId: '1:882893947998:web:9588c9ba3fa64429eea0cf',
};

function toDateString(time) {
  const date = time;
  const dateString = `${date.getFullYear().toString()}/${
    (date.getMonth() + 1).toString().padStart(2, '0')}/${
    date.getDate().toString().padStart(2, '0')}  ${
    date.getHours().toString().padStart(2, '0')}:${
    date.getMinutes().toString().padStart(2, '0')}:${
    date.getSeconds().toString().padStart(2, '0')}`;

  return dateString;
}

async function getLastestTime() {
  Dataable.length = 0;
  const db = firebase.firestore();
  const TimeSet = await db.collection('update').orderBy('update_time', 'desc').limit(1).get();

  let real = false;
  TimeSet.forEach((doc) => {
    if (doc.exists) {
      real = true;
    }
    console.log(doc.data().update_time);
    Dataable.push(doc.data().update_time);
  });
  if (!real) {
    console.log('Time queue is empty.');
    console.warn('Time queue is empty.');
  }
}

async function getAllTimes() {
  Dataable.length = 0;
  const db = firebase.firestore();
  const TimeSet = await db.collection('update').orderBy('update_time', 'desc').get();

  let real = false;
  TimeSet.forEach((doc) => {
    if (doc.exists) {
      real = true;
    }
    console.log(doc.data().update_time);
    Dataable.push(doc.data().update_time);
    Dataable.push('\n');
  });
  if (!real) {
    console.log('Time queue is empty.');
    console.warn('Time queue is empty.');
  }
}

function addCurrentTime() {
  const date = new Date();
  const dateString = toDateString(date);
  const db = firebase.firestore();
  const TimeSet = db.collection('update');
  const data = {
    update_time: dateString,
  };
  TimeSet.add(data);
  // console.log(dateString);
}

async function deleteEarliestTime() {
  const db = firebase.firestore();
  const TimeSet = await db.collection('update').orderBy('update_time').limit(1).get();

  let real = false;
  TimeSet.forEach((doc) => {
    if (doc.exists) {
      real = true;
    }
    db.collection('update').doc(doc.id).delete();
  });
  if (!real) {
    console.log('Time queue is empty.');
    console.warn('Time queue is empty.');
  }
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default {
  toDateString,
  addCurrentTime,
  getAllTimes,
  getLastestTime,
  deleteEarliestTime,
  Dataable,
};
