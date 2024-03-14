'use client'

import styles from "./page.module.css";
import React, { useEffect, useState } from 'react';

const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState('');

    const handleClick = (index: number) => {
        const boardCopy = [...board];
        if (boardCopy[index]) return; // If cell already filled, return
        boardCopy[index] = xIsNext ? 'X' : 'O';
        setXIsNext(!xIsNext);
        setBoard(boardCopy);
    };

    useEffect(() => setWinner(getWinner()), [board])

    const getWinner = () => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return '';
    }
    
    const renderCell = (index: number) => {
        return (
            <div key={index} className={styles.ttt} onClick={() => handleClick(index)}>
                {board[index]}
            </div>
        );
    };

    return (
        <div>
            { !winner && <div className={styles.grid}>
                {Array(9).fill(null).map((_, index) => renderCell(index))}
            </div> }
            { winner && <h2 className={styles.highlight}>Winner: {winner}</h2> }
        </div>
    );
};

export default Board;