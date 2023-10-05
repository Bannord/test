import React from "react";
import ListProduct from "../listProduct/ListProduct";
import PollComponent from "../pollComponent/PollComponent";
import "./Main.scss";
import TitleItem from "../titleItem/TitleItem";
import PaginationList from "../paginationList/PaginationList";
const Main = () => {
  const [isTestFinished, setIsTestFinished] = React.useState(false);


//   const url = 'https://651d4aca44e393af2d597ff1.mockapi.io/products';
//  fetch(url).then(response => response.json()).then(commits => console.log(commits))


  
  const handleTestFinish = () => {
    setIsTestFinished(true);
  };
  return (
    <>
      <div className="main_wrapper">
        <TitleItem
          isTestFinished={isTestFinished}
          props={{
            
            title: isTestFinished
              ? "Результат"
              : "Онлайн-подбор средств для лица",
            text: isTestFinished
              ? "Мы подобрали для вас наиболее подходящие средства"
              : "Пройдите короткий тест и получите список наиболее подходящих для вас косметических продуктов",
          }}
        />

        {!isTestFinished && <PollComponent onTestFinish={handleTestFinish} />}
        <div className="content_wrapper_container">
          <div className="list_wrapper">
            {isTestFinished && <ListProduct />}
          </div>
        </div>
        <PaginationList />
      </div>
    </>
  );
};

export default Main;
