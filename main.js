const main = document.getElementById("main");
const inventory = document.getElementById("inventory");

function createTree(rootRow = 9, rootColumn, treeHeight, i, j, cell) {
    // console.log(treeHeight);

    if (i >= (rootRow - treeHeight + 1) && i <= rootRow) {
        if (j == rootColumn) {
            cell.classList.add("tree")
        }
    }
    if (i >= (rootRow - treeHeight) && i <= (rootRow - treeHeight + 1)) {
        if (j > (rootColumn - 4) && j < (rootColumn + 4)) {
            cell.classList.add("leaf")
        }
    }
    
    if (i >= (rootRow - treeHeight - 2) && i <= (rootRow - treeHeight - 1)) {
        if (j > (rootColumn - 3) && j < (rootColumn + 3)) {
            cell.classList.add("leaf")
        }
    }
    
    if (i >= (rootRow - treeHeight - 4) && i <= (rootRow - treeHeight - 3)) {
        if (j > (rootColumn - 2) && j < (rootColumn + 2)) {
            cell.classList.add("leaf")
        }
    }
}

function createMap() {
    const arr = [];
    const treeHeights = [];
    const maxTrees = Math.floor(Math.random() * 2);
    for (let i = 0; i < maxTrees; i++) {
        let rnd = Math.floor(Math.random() * 100);
        while (arr.includes(rnd) || arr.includes(rnd + 1) || arr.includes(rnd + 2) || arr.includes(rnd + 3) || arr.includes(rnd - 1) || arr.includes(rnd - 2) || arr.includes(rnd - 3)) {
            rnd = Math.floor(Math.random() * 100);
        }
        arr.push(rnd);
        treeHeights.push(Math.floor(Math.random() * 3) + 3);
    }

    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 100; j++) {
            const cell = document.createElement("div")
            cell.classList.add("cell");
            if (i < 10) {
                arr.forEach((rootColumn, index) => {
                    createTree(9, rootColumn, treeHeights[index], i, j, cell);
                })
            } else if (i == 10) {
                cell.classList.add("grass")
            } else if (i < 15) {
                cell.classList.add("dirt")
            } else if (i < 28) {
                cell.classList.add("stone")
            } else {
                cell.classList.add("bedrock")
            }
            main.append(cell);
        }
    }
}
createMap()

