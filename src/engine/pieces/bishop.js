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
            if (board.isValidSquare(positiveRow, positiveCol)) newMoves.push(Square.at(positiveRow, positiveCol));
            if (board.isValidSquare(positiveRow, negativeCol)) newMoves.push(Square.at(positiveRow, negativeCol));
            if (board.isValidSquare(negativeRow, positiveCol)) newMoves.push(Square.at(negativeRow, positiveCol));
            if (board.isValidSquare(negativeRow, negativeCol)) newMoves.push(Square.at(negativeRow, negativeCol));
        }
        return newMoves;
    }
}