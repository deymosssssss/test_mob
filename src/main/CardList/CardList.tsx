import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import cardsStore from "../store/card-store";
import "./CardList.css";

const CardList = observer(() => {
  const [isLoading, setIsLoading] = useState(true);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalContent, setModalContent] = useState<string>();

  const listRef = useRef(null);

  const fetchData = (from: number, count: number) => cardsStore.fetchCards(from, count);
  // const fetchData = (from: number, count: number) =>
  //   cardsStore
  //     .fetchCards(from, count)
  //     .then((res: any) => {
  //       if (res.statusCode === 400) {
  //         setModalContent(res.errorMessage);
  //         setIsModalOpen(true);
  //       }
  //       if (res.statusCode === 401) {
  //         setModalContent("ошибка авторизации");
  //         setIsModalOpen(true);
  //       }
  //       if (res.statusCode === 500) {
  //         setModalContent("все упало");
  //         setIsModalOpen(true);
  //       }

  //       return res;
  //     })
  //     .catch((errorMsg) => {
  //       setModalContent(errorMsg);
  //       setIsModalOpen(true);
  //     });

  useEffect(() => {
    (listRef.current as any).addEventListener("scroll", onScroll);
    return () => {
      (listRef.current as any).removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (isLoading) fetchData(cardsStore.cards.length, 5).then(() => setIsLoading(false));
  }, [isLoading]);

  const onScroll = (_event: any) => {
    const { clientHeight, scrollTop, scrollHeight } = listRef.current as any;

    if (clientHeight + scrollTop > scrollHeight * 0.95) setIsLoading(true);
  };

  return (
    <div className="list" ref={listRef}>
      {cardsStore.cards.map((card) => (
        <React.Fragment key={card.id}>
          <Card card={card}></Card>
        </React.Fragment>
      ))}

      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent}
      </Modal> */}

      <Loader></Loader>
    </div>
  );
});
export default CardList;
