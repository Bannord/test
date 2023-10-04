const RadioLabel = ({ question, onContinueClick, step }) => {
    const handleRadioChange = (index) => {
      // Ничего не делаем при выборе радио - переход только по кнопке "Дальше"
    };
  
    return (
      <div className="question">
        <h3>{question.question}</h3>
        <div className="radio_items">
          {question.options.map((option, index) => (
            <label key={option.id} htmlFor={option.id}>
              <input
                onChange={() => handleRadioChange(index)}
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
