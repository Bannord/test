const ListProduct = () => {
    const listProduct = [
        {
          "id": 1,
          "title": "Бальзам от пигм.пятен для чув. кожи ISISPHARMA NEOTONE Sensitive 30мл",
          "image": "./product-1.jpeg",
          "price": 98.13,
          "oldPrice": 115.45
        },
        {
          "id": 2,
          "title": "Пилинг энзиматический Dermedic HYDRAIN3 HIALURO 50г",
          "image": "./product-2.jpeg",
          "price": 46.55,
          "oldPrice": null
        },
        {
          "id": 3,
          "title": "Крем дневной д/лица Legere, 50мл",
          "image": "./product-3.jpeg",
          "price": 55.75,
          "oldPrice": null
        },
        {
          "id": 4,
          "title": "Крем увл. укрепл.д/чувств.нормал.и обезвож. кожи ISISPHARMA SENSYLIA 24h 40мл",
          "image": "./product-4.jpeg",
          "price": 44.55,
          "oldPrice": null
        },
        {
          "id": 5,
          "title": "Флюид с оч.выс.степ.заот солн.излуч.«Сухое прикосновение» SPF 50+ 40мл",
          "image": "./product-5.jpeg",
          "price": 59.02,
          "oldPrice": 72,
        },
        {
          "id": 6,
          "title": "Концентрат д/проблемной кожи склонной к акне AVENE CLEANANCE Comedomed 30 мл",
          "image": "./product-6.jpeg",
          "price": 63,
          "oldPrice": null
        },
        {
          "id": 7,
          "title": "Крем очищ. успокаив.д/проблемной кожи AVENE 200 мл",
          "image": "./product-7.jpeg",
          "price": 43.25,
          "oldPrice": null
        },
        {
          "id": 8,
          "title": "Маска La Miso моделирующая (альгинатная) с коэнзимом Q10 1000г",
          "image": "./product-8.jpeg",
          "price": 63.5,
          "oldPrice": 76.25
        },
        {
          "id": 9,
          "title": "Сыворотка д/лица с комплексом pretino Ahava SAFE RETINOL 30 мл",
          "image": "./product-9.jpeg",
          "price": 242,
          "oldPrice": null
        },
        {
          "id": 10,
          "title": "Эссенция активирующая смягчающая кожу Ahava Apple of Sodom 100 мл",
          "image": "./product-10.jpeg",
          "price": 185,
          "oldPrice": 240
        }
      ]
    return ( 
        <>
        {listProduct.map(el => 
        (   
            <div className="content_item" key={el.id}>
            <div className="img_wrapper">
              <div className="img_product">
                <img src={el.image} alt="#product" />
              </div>
            </div>
            <span className="text_item">
            {el.title.length > 30 ? `${el.title.slice(0, 45)}...` : el.title}
            </span>
            <div className="pcire_wrapper">
                <span className="main_price">{el.oldPrice}</span>
                <span className="sale_price">{el.price}</span>
            </div>
          </div>
        ))}
        </>
     );
}
 
export default ListProduct;