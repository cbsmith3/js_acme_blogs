
// 1.
// Receives an element name, text content and an optional class name as parameters and returns and HTML element.
function createElemWithText (elemName = "p", 
    textContent = "", 
    className) {
        const myElem = document.createElement(elemName);
        myElem.textContent = textContent;
        if (className) myElem.classList.add(className);
        return myElem;
}

const myJson = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    }
]

// 2.
/* Receives users JSON data as a parameter.  Then uses a for loop
to create an option element for each individual user, assigning 
each user.id to the option.value and each user.name to the 
option.textContent and then adding each option element to an
empty array.  If no parameter is received the function returns
undifined, otherwise the function returns the array of options.
*/
function createSelectOptions (users) {
    if (!users) return undefined;
    else {
        const optionsArray = [];
        for (let i = 0; i < users.length; i++) {
            const myOptionElem = document.createElement("option");
            myOptionElem.value = users[i].id;
            myOptionElem.textContent = users[i].name;
            optionsArray.push(myOptionElem);
        }
        return optionsArray;
    } 
}


// 3.
//
function toggleCommentSection (postId) {
    if (!postId) return undefined;
    else {
        //const mySections = document.querySelectorAll('section');
        const mySection = document.querySelector(`section[data-post-id = '${postId}']`);
        if (!mySection) return null;
        else {
            //const mySectClass = mySection.classList;
            //const result = mySectClass.toggle('hide');
            return mySection;
        }
    }
}


// 4.
//
function toggleCommentButton (postId) {
    if (!postId) return undefined;
    else {
        const myButton = document.querySelector(`button[data-post-id = '${postId}']`);
        if (!myButton) return null;
        else {
            //const mySectClass = mySection.classList;
            //const result = mySectClass.toggle('hide');
            return myButton;
        }
    }
}


// 5.
//
function deleteChildElements (parentElement) {
    const myElement = document.querySelector('parentElement');
    if (!parentElement) return undefined;
    else {

        //const myParentElem = document.querySelector(`${parentElement}`);
        //if (!myParentElem) return undefined;
        //else {
            //return myParentElem;
        //}
        return parentElement;
    }
}


// 6.
//
function addButtonListeners () {
    const allButtons = document.querySelectorAll('main.button');
    if (allButtons) {
        for (let i = 0; i < allButtons.length; i++) {
            //let myPostID = document.allButtons[i].dataset.postId;
        }
        return allButtons;
    }
    //else {
        //
        
    //}
    return allButtons;
}


// 7.
//
function removeButtonListeners () {
    const allButtons = document.querySelectorAll('main.button');
    if (allButtons) {
        return allButtons;
    }
    
    return allButtons;
}


// 8.
//
function createComments (usersComments) {
    if (!usersComments) return undefined;
    else {
        return usersComments;
    }
}


// 9.
//
function populateSelectMenu (usersData) {
    if (!usersData) return undefined;
    else {
        return usersData;
    }
}


// 10.
//
const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonResponse = await response.json();
}


// 11.
//
function getUserPosts (userId) {
    if (!userId) return undefined;
    else {
        return userId;
    }
}


// 12.
//
function getUser (userId) {
    if (!userId) return undefined;
    else {

    }
}


// 13.
//
function getPostComments (postId) {
    if (!postId) return undefined;
    else {

    }
}


// 14.
//
function displayComments (postId) {
    if (!postId) return undefined;
    else {
        const mySection = document.createElement("section");
        mySection.dataset.postId = postId;
        const fragment = createComments(comments);
    }
}


// 15.
//
function createPosts (postsData) {
    if (!postsData) return undefined;
    else {

    }
}


// 16.
//
function displayPosts (postsData) {
    if (!postsData) return undefined;
    else {
        const myMain = document.querySelector("main");
    }
}


// 17.
//
function toggleComments () {

}


// 18.
//
function refreshPosts (postsData) {
    if (!postsData) return undefined;
    else {

    }
}


// 19.
//
function selectMenuChangeEventHandler () {
    
}


// 20.
//
function initPage () {

}


// 21.
//
function initApp () {
    initPage ();
    const selectMenu = document.querySelector("#selectMenu");
    selectMenu.addEventListener("change", selectMenuChangeEventHandler);
}

document.addEventListener("DOMContentLoaded", initApp);
/*

 NOTE: There is one last step to get your app to function correctly. I cannot test for this, but you
 must apply it to call the script into action.
 *** This must be underneath the definition of initApp in your file.
 1. Add an event listener to the document.
 2. Listen for the “DOMContentLoaded” event.
 3. Put initApp in the listener as the event handler function.
 4. This will call initApp after the DOM content has loaded and your app will be started

*/