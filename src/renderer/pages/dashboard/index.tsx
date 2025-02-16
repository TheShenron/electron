import { useEffect, useState } from 'react';
import Nav from '../nav'

const Dashboard = () => {

    const [version, setVersion] = useState('');

    useEffect(() => {
        console.log(`This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`)
    }, []);

    return (
        <div>
            <h3>Dashboard</h3>
            <h1>Electron App</h1>
            <p>App Version: {version}</p>
            {/* <button onClick={() => window.electronAPI.logMessage('Hello from Renderer')}>
                Log Message
            </button> */}
            <Nav />
        </div>
    )
}

export default Dashboard