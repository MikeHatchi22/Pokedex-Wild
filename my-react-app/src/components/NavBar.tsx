interface Pokemon {
    name: string;
    imgSrc?: string;
}

interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
    const handleClickNext = () => {
        setPokemonIndex(pokemonIndex + 1);
    }

    const handleClickPrev = () => {
        setPokemonIndex(pokemonIndex - 1)
    }
    return (
        <>
            {pokemonIndex === 0 ? <button onClick={handleClickPrev} hidden>Précédent</button>
                : <button onClick={handleClickPrev}>Précédent</button>}

            {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickNext}>Suivant</button>
                : <button onClick={handleClickNext} hidden>Suivant</button>}
        </>
    );
}

export default NavBar;