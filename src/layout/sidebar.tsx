"use client"
import React, { useState } from 'react';

export default function Sidebar() {
    const [isFundamentosOpen, setIsFundamentosOpen] = useState(false);

    return (
        <div className="sidebar">
            <h2>Lista dos TPs e ATs</h2>
            <ul>
                <li>
                    <button onClick={() => setIsFundamentosOpen(!isFundamentosOpen)}>
                        Fundamentos {isFundamentosOpen ? '▲' : '▼'}
                    </button>
                    {isFundamentosOpen && (
                        <ul>
                            <li>
                                JavaScript 1:
                                <ul>
                                    <li>TP1</li>
                                    <li>TP2</li>
                                    <li>TP3</li>
                                    <li>AT</li>
                                </ul>
                            </li>
                            <li>
                                JavaScript 2:
                                <ul>
                                    <li>TP1</li>
                                    <li>TP2</li>
                                    <li>TP3</li>
                                    <li>AT</li>
                                </ul>
                            </li>
                            <li>
                                HTML:
                                <ul>
                                    <li>TP1</li>
                                    <li>TP2</li>
                                    <li>TP3</li>
                                    <li>AT</li>
                                </ul>
                            </li>
                            <li>
                                Interatividade:
                                <ul>
                                    <li>TP1</li>
                                    <li>TP2</li>
                                    <li>TP3</li>
                                    <li>AT</li>
                                </ul>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
}