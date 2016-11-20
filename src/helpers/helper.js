const walk = require('tree-walk');

export function getNodeFromArrayById(array, id) {
    const domWalker = walk(el => {
        return el.childComments;
    });

    let parentComment = null;

    array.forEach(comment => {
        domWalker.find(comment, el => {
            if (el.id === id) {
                parentComment = el;
            }
        });
    });

    return parentComment;
}
