import Card from "./Card";
import styles from "./CardContainer.module.css";
import { useSelector } from 'react-redux';

const CardContainer = () => {

  const value = useSelector((state) => state.itemList.list)


  //Animação estava quebrando a lista
  
  // const sr = ScrollReveal({
  //           origin: 'top',
  //           distance: '50px',
  //           duration: 2000,
  //           reset: true
  //       });

  // ScrollReveal().reveal('.reveal', { delay: 1000 });

  return (
    <div  className="reveal">
      <div className={styles.container}>
        {value.map((values) => (
          <Card
           
            key={values.id}
            id={values.id}
            date={values.date}
            hearted={values.hearted}
            title={values.title}
            description={values.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
