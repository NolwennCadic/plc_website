import { useEffect, useState } from "react";


export function ButtonEquipeCard(props) {
    const { indexSelected, indexButton, setPartShown, Icon } = props;
    const [className, setClassName] = useState(indexSelected === indexButton ? "button-equipe-selected" : "button-equipe");
    const [classNameContent, setClassNameContent] = useState(indexSelected === indexButton ? "button-equipe-content-selected" : "button-equipe-content");

    useEffect(() => {
        if (indexSelected === indexButton) {
            setClassName("button-equipe-selected");
            setClassNameContent("button-equipe-content-selected");
        } else {
            setClassName("button-equipe");
            setClassNameContent("button-equipe-content");
        }
    }, [indexButton, indexSelected]);

    return (
        <button className={className} onClick={setPartShown}>
            <Icon className={classNameContent} />
        </button >
    )
}