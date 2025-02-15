import { useNavigate } from 'react-router-dom'

const Nav = () => {

    const navigate = useNavigate()
    const handleNavigate = (path: string) => {
        navigate(path)
    }

    return (
        <div>
            <button onClick={() => handleNavigate('/')}>Dashboard</button>
            <button onClick={() => handleNavigate('/help')}>Help</button>
            <button onClick={() => handleNavigate('/xyz')}>UnKnown Route</button>
        </div>
    )
}

export default Nav