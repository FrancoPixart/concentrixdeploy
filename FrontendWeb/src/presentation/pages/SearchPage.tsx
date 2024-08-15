import React, { useState } from "react"
import { Button } from "../../components/buttons/Button"
import { SearchInput } from "../../components/search/Search"
import { SelectOption } from "../../components/select/SelectOption"
// import "./../../styles/searchPage.css"
import styleSearchPage from "../../styles/searchPage.module.css"

export const SearchPage: React.FC = () => {
    const options = ["Etiqueta", "Serial", "DNI"]
    const [searchQuery, setSearchQuery] = useState("")
    // const [optionSelected, setOptionSelected] = useState("")
    const [optionSelected, setOptionSelected] = useState(options[0])
    // return <div>SearchPage</div>
    // const [optionSelected, setOptionSelected] = useState("")

    // const handleSelect = (value: string) => {
    //     console.log(value)
    //     setOptionSelected(value)
    // }

    // const handleSelect = (selectedOption: string) => {
    const handleSelect = (optionSelected: string) => {
        console.log("Selected option:", optionSelected)
        setOptionSelected(optionSelected)
    }
    // const handleSelect = (selectedOption: string) => {
    //     console.log("Selected option:", selectedOption)
    // }

    const handleSearch = (searchQuery: string) => {
        console.log("Search query:", searchQuery)
        // return searchQuery
    }

    console.log("Search query:", searchQuery);



    return (
        // <div className="searchPage">
        <div className={styleSearchPage.searchPage}>
            <h2 className={styleSearchPage.title}>Verificación de identidad</h2>
            <p className={styleSearchPage.subtitle}>Seleccione una opción</p>

            <div className={styleSearchPage.containerComponents}>

                {/* todo: deberia ser dinamico en base a la seleccion del option */}
                {/* <p>Búsqueda por { }</p> */}
                <div className={styleSearchPage.containerSelect}>
                    <p>Búsqueda por</p>
                    <SelectOption
                        options={options}
                        onSelect={handleSelect}
                        className={styleSearchPage.selectOption}
                        optionSelected={optionSelected}
                    />
                </div>

                <SearchInput
                    onSearch={setSearchQuery}
                    className={styleSearchPage.searchInput}
                    placeholder={`Introduzca la búsqueda por ${optionSelected}`}
                />

                <Button
                    // onClick={handleSearch}
                    onClick={() => handleSearch(searchQuery)}
                    label="Buscar"
                    className={styleSearchPage.buttonSearch}
                />
            </div>
        </div>
    )

}