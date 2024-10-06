import React from "react";
import Home from '../pages/Home';

export { Home }

export const Introduction = React.lazy(() => import('./pages/Introduction'));
export const SelectCharacter = React.lazy(() => import('./pages/SelectCharacter'));
export const Chapter1 = React.lazy(() => import('./pages/Chapter1'));
export const Chapter2 = React.lazy(() => import('./pages/Chapter2'));
export const Chapter3 = React.lazy(() => import('./pages/Chapter3'));
export const Chapter4 = React.lazy(() => import('./pages/FinalChapter'));
