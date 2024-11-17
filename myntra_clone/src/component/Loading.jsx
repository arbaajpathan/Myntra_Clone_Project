function Loading() {
    return <>
    <center>
        <button className="btn btn-primary" style={{ height: "50px ", margin:"100px"}} type="button" disabled>
            <span className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
            <span className="sr-only">Loading...</span>
        </button>
        </center>
    </>
}
export default Loading;