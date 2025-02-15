import { HashRouter, Routes, Route } from 'react-router'
import Dashboard from './pages/dashboard'
import Help from './pages/help'
import Error from './pages/error'

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<Dashboard />} />
                    <Route path='/help' element={<Help />} />

                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App