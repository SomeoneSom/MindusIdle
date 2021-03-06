var resourcesj = JSON.stringify({
    "copper":25,
    "lead":0,
    "scrap":0,
    "sand":0,
    "graphite":0,
    "metaglass":0,
    "spore_pod":0,
    "coal":0,
    "titanium":0,
    "thorium":0,
    "silicon":0,
    "plastanium":0,
    "phase_fabric":0,
    "surge_alloy":0,
    "blast_compound":0,
    "pyratite":0,
    "land":10,
    "power":0
});
var objj = JSON.stringify({
    "mech": [
        0,
        [25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        0,
        "Mechanical Drill",
        0
    ],
    "duo": [
        0,
        [35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1],
        2,
        "Duo",
        0
    ],
    "leadr": [
        0,
        [2, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        0,
        "Lead Drill",
        0
    ],
    "coaldr": [
        0,
        [100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        0,
        "Coal Drill",
        0
    ],
    "graphpress": [
        0,
        [150, 150, 0, 0, 0, 0, 0, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        1,
        "Graphite Press",
        0
    ],
    "combusgen": [
        0,
        [0, 0, 0, 0, 100, 0, 0, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        3,
        "Combustion Generator",
        -60
    ],
    "coppexca": [
        0,
        [250, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        0,
        "Copper Excavator",
        30
    ],
    "leadexca": [
        0,
        [50, 350, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        0,
        "Lead Excavator",
        30
    ]
});
var upgradesj = JSON.stringify([
    [
        "Extra-Powerful Grease",
        "Speed up Mechanical Drills by 2x.\nCosts 100 Copper.",
        0,
        `function(){
            return resources.copper >= 50;
        }`,
        `function(){
            var ret = resources.copper >= 100;
            obj.mech[2] = (ret) ? obj.mech[2].map(x => x * 2) : obj.mech[2];
            resources.copper -= (ret) ? 100 : 0;
            return ret;
        }`,
    ]
]);