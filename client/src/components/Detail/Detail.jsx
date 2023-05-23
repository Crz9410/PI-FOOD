const Detail = (props) => {
    const { healthy, summary, steps } = props.location.state;
    
    return (
      <>
        <div>
          <p>Healthy: {healthy}</p>
          <p>Summary: <div dangerouslySetInnerHTML={{ __html: summary }}></div></p>
          <p>Steps: </p>
          {steps?.map((step) => (
            <div key={step.number}>
              <div>{step.number} {step.step}</div>
    
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default Detail;