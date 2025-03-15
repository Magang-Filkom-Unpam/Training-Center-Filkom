import {Outlet} from "react-router-dom";

const DefaultLayout = () => {
    return (
        <>
            <div>header</div>
            <main>
                <Outlet/>
            </main>
            // footer
        </>
    );
};

export default DefaultLayout;