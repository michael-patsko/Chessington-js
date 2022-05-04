import Piece from './piece';
import Square from "../square";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let newMoves = [];
        for (let i = 0; i < 8; i++) {
            if (i != location.row) newMoves.push(Square.at(i, location.col));
        }
        for (let j = 0; j < 8; j++) {
            if (j != location.col) newMoves.push(Square.at(location.row, j));
        }
        return newMoves;
    }
}
