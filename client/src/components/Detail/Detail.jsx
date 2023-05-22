const Detail = (props) =>{
    const { healthy, summary, steps } = props.location.state;
    return(
        <>
            <div>
                <p>Healthy: {healthy}</p>
                <p>Summary: <div dangerouslySetInnerHTML={{ __html: summary }}></div></p>
                <p>Steps: {steps}</p>


            </div>
        
        </>
    )}


export default Detail;