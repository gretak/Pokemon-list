import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Parallax, ParallaxLayer } from 'react-spring';


const Page = ({ offset, caption, first, second, gradient, onClick }) => (
  <React.Fragment>
  <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
  <div className="slopeBegin" />
  </Parallax.Layer>

  <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
  <div className={`slopeEnd ${gradient}`} />
  </Parallax.Layer>

  <Parallax.Layer className="text header" offset={offset} speed={0.4}>
  <span>
  <p style={{ fontSize: 20 }}>{caption}</p>
  <div className={`stripe ${gradient}`} />
  <p>{first}</p>
  </span>
  </Parallax.Layer>
  
  </React.Fragment>
  )


class App extends React.Component {

  render() {

    return (
      <div style={{height: "90vh"}}>
      <Header/>
      <div className="paralax-container">
      <Parallax className="paralax" ref="parallax" pages={3} horizontal scrolling={true}>
      <Page offset={0} gradient="pink" caption="One day I believe" first="All people will be vegan" onClick={() => this.refs.parallax.scrollTo(1)} />
      <Page offset={1} gradient="teal" caption="One day I believe" first="IE will be working fine with Flexbox" second="adipiscing elit"  onClick={() => this.refs.parallax.scrollTo(2)} />
      <Page offset={2} gradient="tomato" caption="One day I believe" first="Global warming will be the biggest problem"  onClick={() => this.refs.parallax.scrollTo(0)} />
      </Parallax>
      </div>
      <Footer />
      </div>
      )
  }

}

ReactDOM.render(<App/>, document.getElementById("app"))