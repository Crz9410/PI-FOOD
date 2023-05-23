const Detail = (props) => {
  const { id, name, image, healthy, summary, steps } = props.location.state;

  return (
    <>
      <div>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        <img src={image} alt="Not found" />
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