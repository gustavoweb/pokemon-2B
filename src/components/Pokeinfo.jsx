import React, {useState} from 'react';
import './Pokeinfo.css';

function Pokeinfo(){
    const [buscaTermo, setBuscaTermo] = useState('');
    const [pokemonDados, setPokemonDados] = useState(null);
    const [erro, setErro] = useState('');

    const Busca = async fetch('https://pokeapi.co/api/v2/pokemon')
    return(
        <>
            <h1>Informações sobre Pokemon</h1>
        </>
    );
};
export default Pokeinfo;