import './BallWrapper.scss'

const BallWrapper = ({currentStep}) => {
    return ( 
      <div className="ball_question_wrapper">
      {[0, 1, 2].map((index) => (
        <div className={`ball_question ${index === currentStep ? 'active_ball' : 'ball'}`} key={index}></div>
      ))}
    </div>
     );
}
 
export default BallWrapper;