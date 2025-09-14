import { useNavigate } from 'react-router-dom';
import './HomePage.css';



const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="hero-section">
        
        <h1 className="main-title">Enjoy Our Delicious Meal </h1>
        <p>ChefKart service is available All over India</p>
      </header>

      <section className="featured-restaurants">
        <h2>Why Choose ChefKart?</h2>

        <div className="restaurant-cards">
           <div className="restaurant-card" onClick={() => navigate('/dishes/My-Favorite-Restaurant')}
            style={{ backgroundImage: "url('https://st.depositphotos.com/2208320/2296/v/600/depositphotos_22964970-stock-illustration-restaurant-sign-menu-fork-knife.jpg')" }}
            >
            <h3>Food Menu</h3>
            <p>Different Varieties of  food!</p>
          </div>

          <div className="restaurant-card" onClick={() => navigate('/dishes/My-Favorite-Restaurant')}
            style={{ backgroundImage: "url('https://st.depositphotos.com/2208320/2296/v/600/depositphotos_22964970-stock-illustration-restaurant-sign-menu-fork-knife.jpg')" }}>
            <h3>Professional Cooks</h3>
            <p>A place for great food!</p>
          </div>
          <div className="restaurant-card" onClick={() => navigate('/dishes/Best-Pizza-Place')}
            style={{ backgroundImage: "url('https://st.depositphotos.com/2208320/2296/v/600/depositphotos_22964970-stock-illustration-restaurant-sign-menu-fork-knife.jpg')" }}>
            <h3>Timely Service</h3>
            <p>Delicious, fresh, and hot served Timely</p>
          </div>
          <div className="restaurant-card" onClick={() => navigate('/dishes/Spicy-Bites')}
            style={{ backgroundImage: "url('https://st.depositphotos.com/2208320/2296/v/600/depositphotos_22964970-stock-illustration-restaurant-sign-menu-fork-knife.jpg')" }}>
            <h3>Prompt Support</h3>
            <p>24/7 customer support</p>
          </div>
        </div>
      </section>

      <section className="offers-section">
        <h2>Gallery</h2>
        <div className="offers-cards">
          <div>
            <h3>Veg Meals</h3>
            <img src='https://i.pinimg.com/736x/57/14/82/5714822c2ff81c3b4ba4cc7106c1eefc.jpg'/>
          </div>
          <div >
            <h3>Non Veg Meals</h3>
            <img src='https://i.pinimg.com/736x/8b/46/6e/8b466ec51efb6c5ad9d92577a6f26240.jpg'/>
          </div>
          <div >
            <h3>Deserts</h3>
            <img src='https://i.pinimg.com/736x/ca/5a/12/ca5a1209181ca2951527a1aa8c3bd849.jpg'/>
          </div>
          <div >
            <h3>Salads</h3>
            <img src='https://i.pinimg.com/736x/70/4e/94/704e9476ef2f48b3111fc574616c4162.jpg'/>
          </div>
          <div >
            <h3>Soups</h3>
            <img src='https://i.pinimg.com/736x/93/e4/f0/93e4f020ffa1156b4d42d2a8ca0d14f2.jpg'/>
          </div>
          <div >
            <h3>Starters</h3>
            <img src='https://i.pinimg.com/736x/db/87/16/db8716d4eb43047a30f14abb4697e30a.jpg'/>
          </div>
        </div>
      </section>

     

        
      
    </div>
  );
};

export default HomePage;