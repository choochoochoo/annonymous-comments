const walk = require('tree-walk');
const listToTree = require('list-to-tree-lite');

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

export function getTreeFromFlatStructure(list) {
    const options = {
        idKey: 'id',
        parentKey: 'parentId',
        childrenKey: 'childComments'
    };

    return listToTree(list, options);
}
