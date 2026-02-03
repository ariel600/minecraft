const main = document.getElementById("main");
const inventory = document.getElementById("inventory");

function createTree(rootRow = 9, rootColumn = 5, treeHeight = 4, i, j, cell) {
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
    const colomnsTrees = [];
    const treeHeights = [];
    const maxTrees = Math.floor((Math.random() * 12) + 4);
    for (let i = 0; i < maxTrees; i++) {
        let rndComomns = Math.floor(Math.random() * 100);
        while (colomnsTrees.includes(rndComomns) || colomnsTrees.includes(rndComomns + 1) || colomnsTrees.includes(rndComomns + 2) || colomnsTrees.includes(rndComomns + 3) || colomnsTrees.includes(rndComomns - 1) || colomnsTrees.includes(rndComomns - 2) || colomnsTrees.includes(rndComomns - 3)) {
            rndComomns = Math.floor(Math.random() * 100);
        }
        colomnsTrees.push(rndComomns);
        treeHeights.push(Math.floor(Math.random() * 3) + 3);
    }

    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 100; j++) {
            const cell = document.createElement("div")
            cell.classList.add("cell");
            if (i < 10) {
                colomnsTrees.forEach((rootColumn, index) => {
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

function removeCell(type) {
    document.body.addEventListener("click", (event) => {
        const target = event.target.classList
        console.log(target.contains("cell"))
        console.log(target)
        if (target.contains(type)) {
            target.remove(type);
            target.remove(type);
        }
    })
}

function changeCursor(type) {
    const inventory = document.getElementById("inventory")
    inventory.addEventListener("click", (event) => {
        const target = event.target.classList
        if (target.contains(type)){
            document.body.style.cursor = `url(https://guileless-pegasus-d698c6.netlify.app/cursor/${type}.png), auto`
        }
    })
}
createMap()
removeCell("leaf")
removeCell("tree")
removeCell("grass")
removeCell("dirt")
removeCell("stone")
removeCell("bedrock")
changeCursor("diamond-pickaxe")
changeCursor("diamond-shovel")
changeCursor("diamond-axe")
changeCursor("shears")
