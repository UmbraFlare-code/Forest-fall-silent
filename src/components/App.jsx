import { BrowserRouter as Router } from 'react-router-dom'
import { Suspense } from 'react'
import { AppRouter } from '../Router'
import Loader from './Loader'

function App() {
    return (
       <Router>
            <Suspense fallback={<Loader />}>
                <AppRouter />
            </Suspense>
        </Router> 
    )
}

export default App
