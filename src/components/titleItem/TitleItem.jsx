const TitleItem = ({ isTestFinished, props}) => {
    return (
      <>
        {!isTestFinished ? (
          <div className="content_info">
          <h2 className="content_info_title">{props.title}</h2>
          <div className="text_response">
            {props.text}
          </div>
        </div>
        ) : (
          <div className="content_info">
            <h2 className="content_info_title">{props.title}</h2>
            <div className="text_response">
              {props.text}
            </div>
          </div>
        )}
      </>
    );
  };
 
export default TitleItem;