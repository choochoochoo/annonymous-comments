import * as firebase from "firebase";
import { getTreeFromFlatStructure } from '../helpers/helper.js';

export function writeComment(userName, message, parentId, date) {
    var comment = firebase.database().ref('comments').push();
    comment.set({
        userName,
        message,
        parentId,
        date,
        childComments: []
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
