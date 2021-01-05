var divsdr = ["mech"];
var divslnd = ["duo"];
resourcesj = JSON.stringify({
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
    "land":10
});
objj = JSON.stringify({
    "mech": [
        0,
        [25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    "duo": [
        0,
        [35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1]
    ]
});
upgradesj = JSON.stringify([
    [
        "Oiled Cogs",
        "Speed up Mechanical Drills by 2x.\nCosts 100 Copper.",
        0,
        `function(){
            return resources.copper >= 50
        }`,
        `function(){
            var ret = resources.copper >= 100;
            obj.mech[2] = (ret) ? obj.mech[2].map(x => x * 2) : obj.mech[2];
            resources.copper -= (ret) ? 100 : 0;
            return ret;
        }`,
        0
    ]
]);