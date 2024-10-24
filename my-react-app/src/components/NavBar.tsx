interface Pokemon {
    name: string;
    imgSrc?: string;
}

interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
}

function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
    return (
        <>
            {pokemonList.map((pokemon, index) => (
                <button onClick={() => setPokemonIndex(index)} key={index}>
                    {pokemon.name}
                </button>
            ))}
        </>
    );
}

export default NavBar;