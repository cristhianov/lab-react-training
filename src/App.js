// Paso I: Importaciones
import React, { Component } from 'react';
import './css/App.css';
import IdCard from './components/IdCard';
import Greeting from './components/Greeting';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import DriverCardHook from './components/DriverCardHook';
import LikeButtonHook from './components/LikeButtonHook';
import ClickablePictureHook from './components/ClickablePictureHook';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import SignupPage from './components/SignupPage';

//Paso II: Clases
class App extends Component {
  render() {
    return (
      <div className="App">
        <section id="iterationOne">
          <p>Iteration One</p>
          <IdCard
            lastName="Doe"
            firstName="John"
            gender="male"
            height={178}
            birth={new Date('1992-07-14')}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />

          <IdCard
            lastName="Delores "
            firstName="Obrien"
            gender="female"
            height={172}
            birth={new Date('1988-05-11')}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </section>

        <section id="iterationTwo">
          <p>Iteration Two</p>
          <Greeting lang="de">Ludwig</Greeting>
          <Greeting lang="fr">François</Greeting>
        </section>

        <section id="iterationThree">
          <p>Iteration Three</p>
          <Random min={1} max={6}></Random>
          <Random min={1} max={100}></Random>
        </section>

        <section id="iterationFour">
          <p>Iteration Four</p>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </section>

        <section id="iterationFive">
          <p>Iteration Five</p>
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
          />
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white"
          />
        </section>

        <section id="iterationSix">
          <p>Iteration Six</p>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </section>

        <section id="iterationSeven">
          <p>Iteration Seven</p>
          <DriverCardHook
            name="Travis Kalanick"
            // rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: 'Toyota Corolla Altis',
              licensePlate: 'CO42DE',
            }}
          />
          <DriverCardHook
            name="Dara Khosrowshahi"
            // rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: 'Audi A3',
              licensePlate: 'BE33ER',
            }}
          />
        </section>

        <section id="iterationEight">
          <p>Iteration Eight</p>
          <LikeButton />
          <LikeButton />
        </section>

        <section id="iterationEightwithHooks">
          <p>Iteration Eight with Hooks</p>
          <LikeButtonHook />
          <LikeButtonHook />
        </section>

        <section id="iterationNine">
          <p>Iteration Nine</p>
          <ClickablePicture
            img="/img/persons/maxence.png"
            imgClicked="/img/persons/maxence-glasses.png"
          />
        </section>

        <section id="iterationNinewithHooks">
          <p>Iteration Nine with Hooks</p>
          <ClickablePictureHook
            img="/img/persons/maxence.png"
            imgClicked="/img/persons/maxence-glasses.png"
          />
        </section>

        <section id="iterationNTenwithHooks">
          <p>Iteration Ten with Hooks</p>
          <Dice img="/img/dice-empty.png" />
        </section>

        <section id="iterationNElevenwithHooks">
          <p>Iteration Eleven with Hooks</p>
          <Carousel
            imgs={[
              'https://randomuser.me/api/portraits/women/1.jpg',
              'https://randomuser.me/api/portraits/men/1.jpg',
              'https://randomuser.me/api/portraits/women/2.jpg',
              'https://randomuser.me/api/portraits/men/2.jpg',
            ]}
          />
        </section>

        {/* <div>
          <section id="iterationNTwelvewithHooks">
            <p>Iteration Twelve with Hooks</p>
            <NumbersTable limit={12} />
          </section>
        </div> */}

        <section id="iterationFifteenwithHooks">
          <br/>
          <p>Iteration Fifteen with Hooks</p>
          <SignupPage />
        </section>
      </div>
    );
  }
}

//Paso III: Exportaciones
export default App;
