import Piece from './piece';
import Square from "../Square";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let newMoves = [];
        const firstMoveN = location.row + 2;
        const firstMoveS = location.row - 2;
        const firstMoveE = location.col + 2;
        const firstMoveW = location.col - 2;
        const secondMoveN = location.row + 1;
        const secondMoveS = location.row - 1;
        const secondMoveE = location.col + 1;
        const secondMoveW = location.col - 1;
        if (board.isValidSquare(firstMoveN, secondMoveE)) newMoves.push(Square.at(firstMoveN, secondMoveE));
        if (board.isValidSquare(firstMoveN, secondMoveW)) newMoves.push(Square.at(firstMoveN, secondMoveW));
        if (board.isValidSquare(firstMoveS, secondMoveE)) newMoves.push(Square.at(firstMoveS, secondMoveE));
        if (board.isValidSquare(firstMoveS, secondMoveW)) newMoves.push(Square.at(firstMoveS, secondMoveW));
        if (board.isValidSquare(secondMoveN, firstMoveE)) newMoves.push(Square.at(secondMoveN, firstMoveE));
        if (board.isValidSquare(secondMoveS, firstMoveE)) newMoves.push(Square.at(secondMoveS, firstMoveE));
        if (board.isValidSquare(secondMoveN, firstMoveW)) newMoves.push(Square.at(secondMoveN, firstMoveW));
        if (board.isValidSquare(secondMoveS, firstMoveW)) newMoves.push(Square.at(secondMoveS, firstMoveW));
        return newMoves;
    }
}
