function canMove(piece, fromSquare, toSquare) {
    const fromFile = fromSquare.charCodeAt(0) - 65;
    const fromRank = parseInt(fromSquare[1]) - 1;

    const toFile = toSquare.charCodeAt(0) - 65;
    const toRank = parseInt(toSquare[1]) - 1;

    const fileDistance = Math.abs(toFile - fromFile);
    const rankDistance = Math.abs(toRank - fromRank);

    switch (piece.toLowerCase()) {
        case "rook":
            return fromFile === toFile || fromRank === toRank;

        case "bishop":
            return fileDistance === rankDistance;

        case "queen":
            return fromFile === toFile || fromRank === toRank || fileDistance === rankDistance;

        default:
            return false;
    }
}

console.log(canMove("Rook", "A8", "H8"));
console.log(canMove("Bishop", "A7", "G1"));
console.log(canMove("Queen", "C4", "D6"));