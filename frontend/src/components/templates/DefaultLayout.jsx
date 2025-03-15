import {Outlet} from "react-router-dom";

const DefaultLayout = () => {
    return (
        <>
            <div>header update</div>
            <main>
                <Outlet/>
            </main>
            // footer
        </>
    );
};

export default DefaultLayout;