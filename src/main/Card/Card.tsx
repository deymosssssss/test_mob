import { useState } from "react";
import Modal from "../Modal/Modal";
import { ICard } from "./../../core/models/card";
import "./Card.css";

interface CardProps {
  card: ICard;
}

export default function Card({ card }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleButtonClick = (content: string) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="cart" style={{ backgroundColor: card.branding?.cardBackgroundColor }}>
        <div className="header">
          <div className="header_title" style={{ color: card.branding?.highlightTextColor }}>
            {card.title}
          </div>
          <img src="src\assets\img\logo.png" className="header_icon"></img>
        </div>

        <div className="content">
          <div className="score" style={{ color: card.branding?.highlightTextColor }}>
            {card.score}
            <span className="points" style={{ color: card.branding?.textColor }}>
              баллов
            </span>
          </div>
          <div className="info">
            <div className="group">
              <div className="info_caption" style={{ color: card.branding?.textColor }}>
                Кешбэк
              </div>
              <div className="info_value">{`${card.cashback}%`}</div>
            </div>
            <div className="group">
              <div className="info_caption" style={{ color: card.branding?.textColor }}>
                Уровень
              </div>
              <div className="info_value">{card.level}</div>
            </div>
          </div>
        </div>

        <div className="footer">
          <img
            src="src\assets\svg\eye.svg"
            className="icon"
            style={{ backgroundColor: card.branding?.mainColor }}
            onClick={() => handleButtonClick("Нажата клавиша preview, companyId: " + card.companyId)}
          ></img>
          <img
            src="src\assets\svg\trash.svg"
            className="icon"
            style={{ backgroundColor: card.branding?.mainColor }}
            onClick={() => handleButtonClick("Нажата клавиша delete, companyId: " + card.companyId)}
          />
          <button
            className="button"
            onClick={() => handleButtonClick("Нажата клавиша more, companyId: " + card.companyId)}
            style={{
              color: card.branding?.mainColor,
              backgroundColor: card.branding?.backgroundColor,
            }}
          >
            Подробнее
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent}
      </Modal>
    </>
  );
}
