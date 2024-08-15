import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
// import { ProtectedRoutes } from '../../ProtectedRoutes';
import { SearchPage } from '../pages/SearchPage';
import { SecurityPage } from '../pages/SecurityPage';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path='/' element={<ProtectedRoutes />}> */}
                <Route index element={<Navigate to='/security' />} />
                <Route path='/security' element={<SecurityPage />} />
                <Route path='/search' element={<SearchPage />} />
                {/* </Route> */}
                <Route path='/unauthorized' element={<div>No estás autorizado para ver esta página.</div>} />
                <Route path='*' element={<Navigate to='/error' />} />
            </Routes>
        </Router>
    );
};
