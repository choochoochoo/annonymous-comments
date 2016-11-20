import * as firebase from "firebase";

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
                listComments.push({
                    id: key,
                    ...loadedComments[key],
                    childComments: []
                });
            }
            return listComments;
        });
}
