import React from "react";
import { Card } from "react-bootstrap";
import comptaImage from "../images/compta.jpeg";

class FormationCard extends React.Component {
    render() {
        // function downloadFile(url, name = "myFile.pdf") {
        //     fetch(url).then(pdf => {
        //         console.log("pdf =", pdf);
        //         const blob = new Blob([pdf], { type: "application/pdf" });
        //         const href = URL.createObjectURL(blob);

        //         const a = Object.assign(document.createElement('a'), { href, style: "display:none", download: name });
        //         document.body.appendChild(a);
        //         a.click();
        //         URL.revokeObjectURL(href);
        //         a.remove()
        //     })
        // }

        return (
            <Card border="info" style={{ width: '18rem', border: "none" }}>
                <Card.Img variant="top" src={comptaImage} style={{ padding: "10%", borderRadius: "0.5em" }} />
                <hr class="my-12" />
                <Card.Body>

                    <Card.Title>Formation comptabilité niveau 1</Card.Title>
                    <Card.Text>
                        Apprendre les bases de la comptabilité
                    </Card.Text>
                    {/* <Button href="/formationDescription">En savoir plus</Button> */}
                    {/* <a href="../pdf/formation1.pdf" onClick={() => downloadFile("C:/Users/gwenaellecadic/OneDrive - Infrasoft NV/Documents/Perso/Project/plc_website/src/pdf/formation1.pdf", "formation1.pdf")}>
                        Download File
                    </a> */}
                    <a href="http://localhost:3000/src/pdf/formation1.pdf" download>Download File</a>
                </Card.Body>
            </Card>
        )
    }

}

export default FormationCard
