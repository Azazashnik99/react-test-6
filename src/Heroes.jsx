const { useState } = "react";


function Heroes(){

    // const [names,setNames] = useState([
    //     "Шерлок Холмс", 
    //     "Доктор Ватсон", 
    //     "Профессор Мориарти",
    //     "Миссис Хадсон",
    //     "Ирен Адлер"
    // ]);

    const arr = [
        "Шерлок Холмс", 
        "Доктор Ватсон", 
        "Профессор Мориарти",
        "Миссис Хадсон",
        "Ирен Адлер"
    ]

    return(
        <div>
            <ul>
                {arr.map((name,key) => ( //заменил names на arr для проверки
                    <li key={key}>
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Heroes;