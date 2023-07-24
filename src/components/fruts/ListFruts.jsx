import ItemFrut from "./ItemFrut";

const ListFruts = ({fruts}) => {

    //const fruts = ["🍌","🍊", "🥭"];

    return (
        <ul>
             {fruts.map((frut, index) =>(
                <ItemFrut key = {index} frut ={frut}/>
             ))}
        </ul> 
    );
};

export default ListFruts;
