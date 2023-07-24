import MyButton from "./components/MyButton";
import WelcomeText from "./components/WelcomeText";
import ListFruts from "./components/fruts/ListFruts";


const App = () => {
  const title = "Mi titulo desde una constante";
  const classTitle = "text-center";
  const user =true;
  const fruts = ["🍌","🍊", "🥭"];
 

  return (
    <>
      <h1 className= {classTitle}>{title}</h1>;
      <img src="https://picsum.photos/200/300" alt="" />

      <MyButton text ="Boton 1"/>
      <MyButton text ="Boton 2"/>
      <MyButton text ="Boton 3"/>
      
      <WelcomeText  user={user} />

      <ListFruts  fruts = {fruts}/>
        
    </>
  );
};

export default App;