import React from "react";
import ListProduct from "../listProduct/ListProduct";
import PollComponent from "../pollComponent/PollComponent";
import "./Main.scss";
const Main = () => {

  const [isTestFinished, setIsTestFinished] = React.useState(false);

 
      
  const handleTestFinish = () => {
    setIsTestFinished(true);
  };
  return (
    <>
    
    <div className="main_wrapper">
      {!isTestFinished ? <div><h3>Онлайн-подбор средств для лица</h3>
      <span>Пройдите короткий тест и получите список наиболее подходящих для вас косметических продуктов</span>
      </div> :  <div className="content_info">
        <h2 className="content_info_title">Результат</h2>
        <div className="text_response">
          Мы подобрали для вас наиболее подходящие средства
        </div>
      </div> }
      {!isTestFinished && <PollComponent onTestFinish={handleTestFinish} />}
      <div className="content_wrapper_container">
      <div className="list_wrapper">
      {isTestFinished && <ListProduct />}
          
         </div>
      </div>
    </div>
    </>
  );
};

export default Main;
