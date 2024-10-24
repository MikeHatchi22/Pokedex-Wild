interface PokemonProps {
    name: string,
    imgSrc?: string,
}

function PokemonCard({ name, imgSrc }: PokemonProps) {
    return (
        <figure>
            {imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
            <figcaption>{name}</figcaption>
        </figure>
    );
}

export default PokemonCard;