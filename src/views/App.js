import logo from './logo.svg';
import './App.scss';
import React from 'react';



class App extends React.Component {

  state = {
    produce: [
      { id: '1', name: 'Cao sao vang', img: require('../assets/images/caosaovang.jpg') },
      { id: '2', name: 'Choi', img: require('../assets/images/choi.jpg') },
      { id: '3', name: 'Banh', img: require('../assets/images/banh.jpg') }
    ],
    chooseImg: '',
    chooseProduce: false,
    chooseProduceId: ''
  }

  handleClickProduce = (item) => {
    let copyState = { ...this.state }
    copyState.chooseImg = item.img
    copyState.chooseProduce = true
    copyState.chooseProduceId = item.id
    this.setState({
      ...copyState
    })
  }
  render() {
    let { produce, chooseImg, chooseProduce, chooseProduceId } = this.state
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a>
            List Produce
          </a>
          <div className='list-produce'>
            {produce.map((item, index) => {
              return (
                <div key={index}>
                  <div onClick={() => this.handleClickProduce(item)} className={item.id === chooseProduceId ? 'choose-produce' : ''}>{item.name}</div>
                </div>
              )
            })}
          </div>
          <div className='img-produce'>
            {chooseProduce ?
              <div>
                <img src={chooseImg} />
              </div>
              :
              <div>No products selected</div>
            }
          </div>
        </header>

      </div>
    );
  }
}

export default App;