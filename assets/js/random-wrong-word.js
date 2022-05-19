var arrayW = ["BTSSPXSE", "BPTVVB", "BTXXVVSE", "BPVSPSE", "BTSSSE",
"BPSXSE", "BSBTTPPXT", "BSTTXPVSTSB", "BSVPP", "BSPSTE", "BPVXT", "BTXXTPPSX", "BBVPBPBVVE", "BTSSP", "BSXVT", "BBBXVSVX", "BTSBSSSSTE", "BPSPSX", "BPTVXBB", "BPTVSB", "BXBXTVS", "BPTTVPSSSS", "BVTTBTSP", "BXVXSXS", "BSTTTV"];

function getItemFalse(){
    document.getElementById("wrong-word").innerHTML = arrayW[Math.floor(Math.random() * arrayW.length)];
}