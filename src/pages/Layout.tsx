import { Link, Outlet, useLocation } from 'react-router';
import { LoginIcon, Logo } from '../assets/icons'


function Layout() {
    const location = useLocation()
    const isHomePage = location.pathname == "/"
    return (
        <div>
            <header className="p-8 flex justify-between">
                <Link to={"/"}>
                    <div className='font-bold flex flex-row items-center gap-1'>
                        <Logo />
                        foo-rum
                    </div>
                </Link>

                <Link to={isHomePage ? "/signin" : "/"}>
                    <div className='font-semibold text-sm flex flex-row items-center gap-1 h-full'>
                        {
                            isHomePage ?
                                <>Login<LoginIcon /></> :
                                "Back to home"
                        }

                    </div>
                </Link>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;