import confetti from "../../../images/confetti-305394_1280.png";

export function SuccessUI() {
    return (
        <div style={{ height: "60vh" }}>
            {/* <PartySvg fill="#004C38" className='icon-test' /> */}
            <img
                src={confetti}
                className={"image-confetti"}
                alt={"confettis"}
            />

            <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ fontSize: "30px", fontFamily: "fantasy" }}>Merci pour votre inscription!</div>
                <div style={{ width: "80%", textAlign: "center" }}>La newsletter arrive vite, si vous avez des questions, n'hésitez pas à nous contacter.</div>
            </div>
        </div>
    )
}