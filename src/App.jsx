import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

const App = () => {
  return (
  <div className="container">
    <Hero/>
<section className="articles">
  <article className="new_article">
    <img src="src/assets/images/image-retro-pcs.jpg" alt="Retro computer" />
    <div className="content">
      <h2>01</h2>
      <h3>Reviving Retro PCs</h3>
      <p> What happens when old PCs are given modern upgrades?</p>
    </div>
  </article>
  <article className="new_article">
    <img src="src/assets/images/image-top-laptops.jpg" alt="Retro computer" />
    <div className="content">
      <h2>02</h2>
      <h3>Top 10 Laptops of 2022</h3>
      <p> Our best picks for various needs and budgets.</p>
    </div>
  </article>
  <article className="new_article">
    <img src="src/assets/images/image-retro-pcs.jpg" alt="Retro computer" />
    <div className="content">
      <h2>03</h2>
      <h3>The Growth of Gaming</h3>
      <p>How the pandemic has sparked fresh opportunities.</p>
    </div>
  </article>
</section>

      
  </div>
  )
}

export default App
