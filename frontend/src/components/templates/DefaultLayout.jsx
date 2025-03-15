import {Outlet} from "react-router-dom";

const DefaultLayout = () => {
    return (
        <>
            <div>header</div>
            <main>
                <Outlet/>
            </main>
            <div>Footer</div>
        </>
    );
};

export default DefaultLayout;