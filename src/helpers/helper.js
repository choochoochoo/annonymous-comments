export function getNodeFromArrayById(array, id) {
    const walk = require('tree-walk');

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
    const listToTree = require('list-to-tree-lite');

    const options = {
        idKey: 'id',
        parentKey: 'parentId',
        childrenKey: 'childComments'
    };

    return listToTree(list, options);
}

export function getFormatDate(timestamp) {
    const formatDate = require('date-format');
    return formatDate.asString('dd.mm.yyyy hh:mm', new Date(timestamp));
}
