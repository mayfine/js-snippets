let tree = [
    {
        name: 'a',
        children: [
            {
                name: 'b'
            },
            {
                name: 'dd'
            }
        ]
    },
    {
        name: 'C',
        children: [
            {
                name: 'a',
                children: [
                    {
                        name: 'b'
                    },
                    {
                        name: 'c'
                    }
                ]
            }
        ]
    }
];

/**
 * 过滤符合条件的树结构
 * 
 * @method filterTree
 * @param {Array} sourceTree 
 * 
 * @returns {Array}
 */
function filterTree (sourceTree) {

    if (!Array.isArray(sourceTree)) {
        return;
    }

    let filterRes = sourceTree.filter(item => {
        if (item.name === 'a') {
            return true;
        } else if (!item.children || !item.children.length) {
            return false;
        }

        item.children = filterTree(item.children);

        return item.children.length;
    });
    
    return filterRes;
}

let res = filterTree(tree);

console.log(res);
