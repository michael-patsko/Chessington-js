import Piece from './piece';
import Square from "../Square";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let newMoves = [];
        for (let a = 1; a < 8; a++) {
            const positiveRow = location.row + a;
            const negativeRow = location.row - a;
            const positiveCol = location.col + a;
            const negativeCol = location.col - a;
            if (positiveRow >= 0 && positiveRow < 8 && positiveCol >=0 && positiveCol < 8) newMoves.push(Square.at(positiveRow, positiveCol));
            if (positiveRow >= 0 && positiveRow < 8 && negativeCol >=0 && negativeCol < 8) newMoves.push(Square.at(positiveRow, negativeCol));
            if (negativeRow >= 0 && negativeRow < 8 && positiveCol >=0 && positiveCol < 8) newMoves.push(Square.at(negativeRow, positiveCol));
            if (negativeRow >= 0 && negativeRow < 8 && negativeCol >=0 && negativeCol < 8) newMoves.push(Square.at(negativeRow, negativeCol));
        }
        return newMoves;
    }
}