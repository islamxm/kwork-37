import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Access } from '../access/Access';
import { VlsProvider } from '../../hoc/VlsProvider';
import { Result } from '../result/Result';
import { Connections } from '../connections/Connections';

export const App = () => {
    return (
        <div className="wrapper">
            <VlsProvider>
                <main className="main">
                    <div className="content">
                        <Router>
                            <Routes>
                                <Route exact path='/' element={<Access/>}/>
                                <Route exact path='/step-2' element={<Connections/>}/>
                            </Routes>
                        </Router>
                    </div>
                    <Result/>
                </main>
            </VlsProvider>
            
        </div>
    )
}