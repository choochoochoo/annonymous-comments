import * as firebase from "firebase";
import { getTreeFromFlatStructure } from '../helpers/helper.js';

export function writeComment(userName, message, date, parentId) {
    // метод set в промисе не возвращает использованный ключ, 
    // пришлось завернуть в промис
    const newKey = firebase.database().ref().child('comments').push().key;
    return new Promise((resolve, reject) => {
        firebase.database().ref(`comments/${newKey}`).set({
            userName,
            message,
            parentId,
            date,
            childComments: []
        }).then(() => {
            resolve(newKey);
        }).catch(exception => {
            reject(exception);
        });
    });
}

export function readComments() {
    return firebase.database().ref('/comments/')
        .once('value').then(comments => {
            const listComments = [];
            const loadedComments = comments.val();
            for (let key in loadedComments) {
                if ({}.hasOwnProperty.call(loadedComments, key)) {
                    listComments.push({
                        id: key,
                        ...loadedComments[key],
                        childComments: []
                    });
}
            }

return getTreeFromFlatStructure(listComments);
        });
}
