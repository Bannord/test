const RadioLabel = ({ question, onRadioChange}) => {
   
  
    return (
      <div className="question">
        <h3>{question.question}</h3>
        <div className="radio_items">
          {question.options.map((option, index) => (
            <label key={option.id} htmlFor={option.id}>
              <input
                onChange={() => onRadioChange(option.id)}
                type="radio"
                id={option.id}
                name={question.id}
                value={option.id}
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
    );
  };
  


export default RadioLabel;
