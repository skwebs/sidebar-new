// Firebase setting
function config(){
// firebase config
var firebaseConfig = {
	apiKey: "AIzaSyDO-WHzinbOes48li-MJUHUjWb9xR6AA6I",
	authDomain: "skdemo-6a83f.firebaseapp.com",
	databaseURL: "https://skdemo-6a83f.firebaseio.com",
	projectId: "skdemo-6a83f",
	storageBucket: "skdemo-6a83f.appspot.com",
	messagingSenderId: "686345506363",
	appId: "1:686345506363:web:2faabcf8a595d2b223161e",
	measurementId: "G-MBRWW0R063"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// declare const
var fb = firebase.firestore();
return fb;
}
