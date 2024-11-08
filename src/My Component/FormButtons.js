import { Link } from 'react-router-dom';

// Function Component
function FormButtons() {
    // Function to refresh the page
    const handleReset = () => {
        window.location.reload();
    };

    // Component UI: HTML Rendering
    return (
        <>
            <input type="submit" className="btn me-3 text-dark bg-white" style={{ width: '5em' }} value="SUBMIT" />
            <input type="reset" className="btn me-3 text-dark bg-white" style={{ width: '5em' }} value="RESET" onClick={handleReset} />
            <Link to="/FAQ">
                <input type="button" className="btn me-3 text-dark bg-white" style={{ width: '5em' }} value="FAQ" />
            </Link>
        </>
    );
}

// Export this component to the entire app, can be re-used or hooked into other Components
export default FormButtons;
