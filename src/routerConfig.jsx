import Home from './pages/Home';
import Introduction from './pages/Introduction';
import SelectCharacter from './components/SelectCharacter';
import Chapter1 from './pages/Chapter1';
import Chapter2 from './pages/Chapter2';
import Chapter3 from './pages/Chapter3';
import FinalChapter from './pages/FinalChapter';

export const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/introduction",
        element: <Introduction />,
    }, 
    {
        path: "/select-character",
        element: <SelectCharacter />,
    },
    {
        path: "/chapter-1",
        element: <Chapter1 />,
    },
    {
        path: "/chapter-2",
        element: <Chapter2 />,
    },
    {
        path: "/chapter-3",
        element: <Chapter3 />,
    },
    {
        path: "/final-chapter",
        element: <FinalChapter />,
    },
]
