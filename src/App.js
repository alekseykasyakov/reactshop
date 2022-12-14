import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import { render } from "@testing-library/react"
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"

class App extends React.Component {
  constructor(props) { //конструтор принимает параметр props
      super(props) //пропсы будем передавать в конструктор родительского класса 
      //создаем состояние
      this.state = {
        orders : [],
        currentItems : [],
        items : [
          {
            id:1,
            title: 'Дзеркало Карат Black 120 см',
            img: 'https://meblevakimnata.ua/r_imgs.php?w=735&thumb=zerkalo-karat-black.jpg',
            desc: 'Довжина 90 Ширина 26 Висота 120 Постачальник Аква Родос Коллекція Карат',
            category: 'mirors',
            price: '4501.00' 
          },
          {
            id:2,
            title: 'Стіл TML-815',
            img: 'https://meblevakimnata.ua/r_imgs.php?w=735&thumb=stol_tml-815_belyi_mramor_11.jpg',
            desc: 'Довжина 160 Ширина 90 Довжина в розкладеному вигляді 200 Висота 76 Механізм трансформації автомат Постачальник Ветро Меблі',
            category: 'tables',
            price: '44820,00' 
          },
          {
            id:3,
            title: 'Стілець барний B-22',
            img: 'https://meblevakimnata.ua/r_imgs.php?w=735&thumb=stul_barnyi_b-22_mednyi_1.jpg',
            desc: 'Довжина 55 Ширина 49 Висота 65 Постачальник Ветро Меблі',
            category: 'chairs',
            price: '5821,00' 
          },
          {
            id:4,
            title: 'Комплект колекція Прайм',
            img: 'https://meblevakimnata.ua/r_imgs.php?w=735&thumb=photo5460690101412672424.jpg',
            desc: 'Довжина 386 Ширина 228 Довжина спального місця 200 Ширина спального місця 140 Висота 104 Механізм трансформації Дельфін Постачальник Біс-М Кут повороту Г',
            category: 'upholstered',
            price: '55496' 
          },
          {
            id:5,
            title: 'Вітрина Luci 4dLCCV01L',
            img: 'https://meblevakimnata.ua/r_imgs.php?w=735&thumb=photo5348031309647294754.jpg',
            desc: 'Довжина 90.4 Ширина 40 Висота 199 Постачальник Агата Україна Коллекція Luci',
            category: 'livingroom',
            price: '16200' 
          },
          {
            id:6,
            title: 'Матрац Латекс дуал нью',
            img: 'https://meblevakimnata.ua/r_imgs.php?w=735&thumb=lateks-new-jpg-1-900x630.jpg',
            desc: 'Матрац Latex dual new — безпружинна модель ТМ Latex&Kokos від фабрики Матролюкс. Завдяки комбінації латексу і кокосової койри, поверхня виробу володіє неймовірним комфортом. Дві його функціональних сторони можна використовувати по черзі, залежно від пори року або особистих переваг. Одна сторона мяка, а друга — середньої жорсткості.\n'           
            +'Матрац має й інші переваги:\n '+
            +'Екологічна чистота і безпека.'
            +'Ортопедичний ефект і анатомічність.'
            +'Стійкість до появи хвороботворних бактерій.'
            +'Повітропроникність і гігроскопічність.'
            +'Надійність і довговічність.',
            category: 'mattresses',
            price: '19035' 
          },
          {
            id:7,
            title: 'Стіл TMM-50-1',
            img: 'https://meblevakimnata.ua/r_imgs.php?w=735&thumb=stol_tmm-50-1_belyi_13_.jpg',
            desc: 'Фьюженом називають стиль інтерєру, коли хочуть поєднати непоєднувані, на перший погляд, елементи. Здавалося б, як прозоре і крихке скло підходить до твердої і щільної деревині? Однак в даній моделі столу, скляний елемент доповнює витонченість роботи майстрів і світлий відтінок МДФ-ної плити.',
            category: 'tables',
            price: '23876' 
          }
        ],
        showFullItem : false,
        fullItem: {}
      }
      this.state.currentItems = this.state.items
      this.addToOrder = this.addToOrder.bind(this)
      this.deleteOrder = this.deleteOrder.bind(this)
      this.chooseCategory = this.chooseCategory.bind(this)
      this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories  chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onShowItem={this.onShowItem} onAdd={this.addToOrder} />}
        <Footer />
      </div>
    )
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if (category === 'all'){
      this.setState({
        currentItems : this.state.items
    
      })
      return 
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
    console.log(category)
  }

  deleteOrder(id){
      this.setState({orders: this.state.orders.filter(el => el.id !== id)})
      //console.log(id);
  }
  addToOrder(item){
      let isInArray
      this.state.orders.forEach(element => {
        if (element.id === item.id)
          isInArray = true
      })
      if (!isInArray)
        this.setState({orders : [...this.state.orders, item]} )
  }
}


export default App;
