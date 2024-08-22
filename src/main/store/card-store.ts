import { makeAutoObservable, runInAction } from "mobx";
import { ICard } from "../../core/models/card";

class CardsStore {
  cards: ICard[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  deleteCard(id: number) {
    this.cards = this.cards.filter((card) => card.id !== id);
  }

  addCards(cards: ICard[]) {
    this.cards = [...this.cards, ...cards];
  }

  fetchCards(from: number, count: number = 5) {
    // return fetch("http://devapp.bonusmoney.pro/mobileapp/getAllCompanies", {
    //   method: "POST",
    //   headers: { TOKEN: "123" },
    // })

    return new Promise((res, rej) => {
      setTimeout(() => {
        res(cardsMock);
      }, 2000);
    }).then((data: any) => {
      runInAction(() => (this.cards = [...this.cards, ...cardsMock.map((el) => ({ ...el, id: Math.floor(Math.random() * 10000000000) }))]));
    });
  }
}
export default new CardsStore();

const cardsMock = [
  {
    id: 1,
    companyId: 1,
    title: "qwe",
    score: 100,
    cashback: 100,
    level: "first",
    branding: {
      cardBackgroundColor: "yellow",
      highlightTextColor: "black",
      textColor: "gray",
      mainColor: "white",
      accentColor: "red",
      backgroundColor: "#efefef",
    },
  },
  {
    id: 2,
    companyId: 2,
    title: "asd",
    score: 200,
    cashback: 200,
    level: "second",
    branding: {
      cardBackgroundColor: "red",
      highlightTextColor: "black",
      textColor: "gray",
      mainColor: "green",
      accentColor: "red",
      backgroundColor: "#efefef",
    },
  },
  { id: 3, companyId: 3, title: "zxc", score: 300, cashback: 400, level: "third" },
  { id: 4, companyId: 4, title: "tyu", score: 400, cashback: 500, level: "fourth" },
  { id: 5, companyId: 5, title: "vbn", score: 500, cashback: 600, level: "fifth" },
];
