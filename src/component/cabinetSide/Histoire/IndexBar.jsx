import React, { useEffect } from "react";
import { useRef } from "react";

function placeButtons(radiusButton, totalSize, amountButtons, index) {
    let spaceBetween = totalSize / (amountButtons - 1);
    let output = [];
    for (let i = 0; i < amountButtons; i++) {
        output.push({
            centerX: i * spaceBetween,
            centerY: 25,
            radius: radiusButton,
            hover: false,
        });
    }
    return output;
}

function draw(ctx, circles, totalSize, radiusButton, margin, indexSelected) {
    ctx.beginPath();
    ctx.moveTo(margin + radiusButton, 25);
    ctx.lineTo(totalSize + radiusButton, 25);
    ctx.stroke();
    for (let index in circles) {
        ctx.beginPath();
        ctx.arc(margin + circles[index].centerX, circles[index].centerY, circles[index].radius, 0, 2 * Math.PI);
        if (index == indexSelected) {
            if (circles[index].hover) ctx.fillStyle = "green";
            else ctx.fillStyle = "black";
        } else if (circles[index].hover) {
            ctx.fillStyle = "lightGray";
        } else {
            ctx.fillStyle = "#004C38";
        }
        ctx.fill();
        ctx.stroke();
    }
}

function calculateDistanceToCenter(x0, y0, x, y) {
    return Math.sqrt(Math.pow(x0 - x, 2) + Math.pow(y0 - y, 2))
}

export function IndexBar(props) {
    const { amountButtons, indexSelected, setIndex } = props;

    //better decide spaceBetween...
    let TOTALSIZE = 120;
    let RADIUSBUTTON = 8;
    let MARGIN = 10;

    let circles = placeButtons(RADIUSBUTTON, TOTALSIZE, amountButtons, indexSelected);
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        draw(context, circles, TOTALSIZE, RADIUSBUTTON, MARGIN, indexSelected);

        canvas.onmousemove = function (e) {
            // Get the current mouse position
            var r = canvasRef.current.getBoundingClientRect(),
                x = e.clientX - r.left, y = e.clientY - r.top;
            context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

            for (let index in circles) {
                //Know when the mouse hits a circle --> if x and y are in the circle...
                let distanceToCenter = calculateDistanceToCenter(circles[index].centerX, circles[index].centerY, x, y);
                if (distanceToCenter <= RADIUSBUTTON) {
                    circles[index].hover = true;
                    console.log("index =", index);
                } else {
                    circles[index].hover = false;
                }
            }
            draw(context, circles, TOTALSIZE, RADIUSBUTTON, MARGIN, indexSelected);
        }
    }, []);

    return (
        <canvas
            id="myCanvas"
            width="200"
            height="50"
            ref={canvasRef}
            onClick={(e) => {
                //Here we put the onclick and reloading?
                const canvas = canvasRef.current;
                const ctx = canvas.getContext('2d');
                //Check the place for the onClick....
                // I need to get the click's position
                var r = canvasRef.current.getBoundingClientRect(),
                    x = e.clientX - r.left, y = e.clientY - r.top;
                // We should deduce the closest element --> x/spaceBetween --> with spaceBetween
                // if y < 15 && > 35, aucun interet
                // Math.round();
                let spaceBetween = TOTALSIZE / (amountButtons - 1);
                if (y => 15 && y <= 35) {
                    let closestCircle = Math.round(x / spaceBetween);
                    let distanceToCenter = calculateDistanceToCenter(circles[closestCircle].centerX, circles[closestCircle].centerY, x, y);
                    if (distanceToCenter <= RADIUSBUTTON) {
                        setIndex(closestCircle);
                    }
                }
                draw(ctx, circles);
            }}
        />

    )
}
