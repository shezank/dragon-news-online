import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex items-center justify-center h-96">
            <div className="mx-auto text-center" id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to={"/"}><button className="btn"> Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;