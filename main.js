const main = document.getElementById("main");
const inventory = document.getElementById("inventory");

function createTree(rootRow = 9, rootColumn, treeHeight, i, j, cell) {
    if (i >= (rootRow - treeHeight + 1) && i <= rootRow) {
        if (j == rootColumn) {
            cell.classList.add("tree");
        };
    };

    if (i >= (rootRow - treeHeight) && i <= (rootRow - treeHeight + 1)) {
        if (j > (rootColumn - 4) && j < (rootColumn + 4)) {
            cell.classList.add("leaf");
        };
    };

    if (i >= (rootRow - treeHeight - 2) && i <= (rootRow - treeHeight - 1)) {
        if (j > (rootColumn - 3) && j < (rootColumn + 3)) {
            cell.classList.add("leaf");
        };
    };

    if (i >= (rootRow - treeHeight - 4) && i <= (rootRow - treeHeight - 3)) {
        if (j > (rootColumn - 2) && j < (rootColumn + 2)) {
            cell.classList.add("leaf");
        };
    };
};

function createMap() {
    const colomnsTrees = [];
    const treeHeights = [];
    const maxTrees = Math.floor((Math.random() * 12) + 4);
    for (let i = 0; i < maxTrees; i++) {
        let rndComomns = Math.floor(Math.random() * 100);

        while (colomnsTrees.includes(rndComomns) || colomnsTrees.includes(rndComomns + 1) || colomnsTrees.includes(rndComomns + 2) || colomnsTrees.includes(rndComomns + 3) || colomnsTrees.includes(rndComomns - 1) || colomnsTrees.includes(rndComomns - 2) || colomnsTrees.includes(rndComomns - 3)) {
            rndComomns = Math.floor(Math.random() * 100);
        };
        colomnsTrees.push(rndComomns);
        treeHeights.push(Math.floor(Math.random() * 3) + 3);
    };

    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 100; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            if (i < 10) {
                colomnsTrees.forEach((rootColumn, index) => {
                    createTree(9, rootColumn, treeHeights[index], i, j, cell);
                });
            } else if (i == 10) {
                cell.classList.add("grass");
            } else if (i < 15) {
                cell.classList.add("dirt");
            } else if (i < 28) {
                cell.classList.add("stone");
            } else {
                cell.classList.add("bedrock");
            };
            main.append(cell);
        };
    };
};

let cursor;

function changeCursor(target) {
    document.body.style.cursor = `url(https://guileless-pegasus-d698c6.netlify.app/cursor/${target}.png), auto`;
    cursor = target;
};

function removeCell(target) {
    if (
        (cursor === "shears" && target[1] === "leaf") ||
        (cursor === "diamond-axe" && target[1] === "tree") ||
        (cursor === "diamond-shovel" && (target[1] === "dirt" || target[1] === "grass")) ||
        (cursor === "diamond-pickaxe" && target[1] === "stone")
    ) {
        addInventory(target[1])
        target.remove(target[1]);
        target.remove("leaf");
    }
};

const storeObject = {
    leaf: 0,
    tree: 0,
    grass: 0,
    dirt: 0,
    stone: 0
}

function addCell() {
    if(cursor === "oak-leaves"){
        document.document.createElement("div").classList.add("")
    }
}

function addInventory(type) {
    const tile = document.querySelector(`.${type}B`)
    tile.classList.add('inventory')
    storeObject[type]++;
    tile.innerText = storeObject[type];
}

const typeCursor = {
    leafB: "oak-leaves",
    treeB: "oak-log",
    grassB: "grass",
    dirtB: "dirt",
    stoneB: "stone"
}

function startGame() {
    createMap();
    document.body.addEventListener("click", (event) => {
        const target = event.target.classList;
        if (target.value === "cell") {
            addCell()
        }
        if (target[1] === "diamond-pickaxe" || target[1] === "diamond-shovel" || target[1] === "diamond-axe" || target[1] === "shears") {
            changeCursor(target[1]);
        } else if (target[1] === "inventory") {
            changeCursor(typeCursor[target[0]])
        } else if (target.contains("cell")) {
            removeCell(target);
        };
    });
};
startGame();