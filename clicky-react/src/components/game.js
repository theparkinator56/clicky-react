import React from "react";
import GameImages from "./gameImages"
import data from "./../data"

class Game extends React.Component {
    state = {
        data,
        score: 0,
        topScore: 0,
        message: "Click as many images as you can without repeating"
    };
    componentDidMount() {
        this.setState({ data: this.shuffleDeck(this.state.data) });
    }

    shuffleDeck = data => {
        let newData = data.sort(function(a, b){return 0.5 - Math.random()});
        return newData;
    };
    resetDeck = data => {
        const resetData = data.map(item => ({ ...item, clicked: false }));
        return this.shuffleDeck(resetData);
      };

    correctGuess = newData => {
        let newScore = this.state.score;
        newScore++
        let newTopScore = Math.max(newScore, this.state.topScore);

        this.setState({
            data: this.shuffleDeck(newData),
            score: newScore,
            topScore: newTopScore,
        })
    }

    wrongGuess = newData => {
        this.setState({
            data: this.resetDeck(newData),
            score: 0
        })
    }

    gameCardClick = id => {
        let guessedCorrectly = false;
        const newData = this.state.data.map(item => {
          if (item.id === id) {
            if (!item.clicked) {
              item.clicked = true;
              guessedCorrectly = true;
            }
          }
          return item;     
        });

        guessedCorrectly ? this.correctGuess(newData) : this.wrongGuess(newData);
      };
    render() {
        return (
            <div>
                    {
                        this.state.data.map(item => (
                                <GameImages
                                    key={item.id}
                                    id={item.id} 
                                    image={item.image}
                                    clicked={item.clicked}
                                    handleClick={this.gameCardClick}
                                />
                        ))
                    }
            </div>
        );
    }
}
                    
                    
                    

  
  export default Game;