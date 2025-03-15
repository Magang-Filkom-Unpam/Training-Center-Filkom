import {Outlet} from "react-router-dom";

const LayoutDefault = () => {
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

export default LayoutDefault;