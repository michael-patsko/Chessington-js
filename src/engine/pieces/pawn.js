import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let newMoves = [];

        // Handles first move
        if (this.player === Player.WHITE && location.row === 1) {
            const newRow = location.row + 1;
            if (board.validMove(newRow, location.col)) newMoves.push(Square.at(newRow, location.col));
            if (board.validMove(newRow + 1, location.col) && board.validMove(newRow, location.col)) newMoves.push(Square.at(newRow + 1, location.col));
            return newMoves
        } else if (this.player === Player.BLACK && location.row === 6) {
            const newRow = location.row - 1;
            if (board.validMove(newRow, location.col)) newMoves.push(Square.at(newRow, location.col));
            if (board.validMove(newRow - 1, location.col) && board.validMove(newRow, location.col)) newMoves.push(Square.at(newRow - 1, location.col));
            return newMoves
        }

        // Handles all other moves when not capturing
        if (this.player === Player.WHITE) {
            const newRow = location.row + 1;
            if (board.validMove(newRow, location.col)) newMoves.push(Square.at(newRow, location.col));
            return newMoves;
        } else {
            const newRow = location.row - 1;
            if (board.validMove(newRow, location.col)) newMoves.push(Square.at(newRow, location.col));
            return newMoves;
        }
    }
}