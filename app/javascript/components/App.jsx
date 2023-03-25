import Layout from 'antd/es/layout/layout'
import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ConfigProvider } from 'antd'
import frFR from 'antd/locale/fr_FR'
import 'dayjs/locale/fr';
import dayjs from 'dayjs'
import Search from './Search/Search'

dayjs.locale('fr')

const App = ({ _arg }) => {
    const queryClient = new QueryClient()

    return (<Layout style={{ height: '100vh' }}>
        <Router>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path="/" element={<Search />} />
                </Routes>
            </QueryClientProvider>
        </Router>
    </Layout>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root')
    console.log('ok')
    const root = ReactDOM.createRoot(rootEl)
    root.render(
        <React.StrictMode>
            <ConfigProvider locale={frFR}>
                <App />
            </ConfigProvider>
        </React.StrictMode>
    )
})
