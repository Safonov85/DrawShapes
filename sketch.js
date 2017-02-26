var point1X;
var point1Y;
var point2X;
var point2Y;
var backgroundColor = 150;


function setup()
{
    createCanvas(640, 300);
    background(backgroundColor);
}

function draw()
{
    createShapes();
}

function createShapes()
{
    // Draw Line
    if (document.getElementById('selectshape').value == "line")
    {
        if (mouseIsPressed)
        {
            background(backgroundColor);
            if (point1X == null && point1Y == null)
            {
                point1X = mouseX;
                point1Y = mouseY;
            }

            // Draw a line between 2 points of a mouse click to a mouse drag
            strokeWeight(5);
            line(point1X, point1Y, mouseX, mouseY);
        }
        else
        {
            point1X = null;
            point1Y = null;
        }
    }

    // Draw Circle
    if (document.getElementById('selectshape').value == "circle")
    {
        if (mouseIsPressed)
        {
            background(backgroundColor);
            if (point1X == null && point1Y == null)
            {
                point1X = mouseX;
                point1Y = mouseY;
            }

            // Draw a Circle, size from where mouse position was clicked(and held) to where the mouse was dragged
            noFill();
            strokeWeight(2);
            ellipse(point1X, point1Y, point1X - mouseX, point1X - mouseX);
        }
        else
        {
            point1X = null;
            point1Y = null;
        }
    }

    // Draw rectangle
    if (document.getElementById('selectshape').value == "rectangle")
    {
        if (mouseIsPressed)
        {
            background(backgroundColor);
            if (point1X == null && point1Y == null)
            {
                point1X = mouseX;
                point1Y = mouseY;
            }

            // Draw a Rectangle, size from where mouse position was clicked(and held) to where the mouse was dragged
            noFill();
            strokeWeight(2);
            rect(point1X, point1Y, mouseX, mouseY);
        }
        else
        {
            point1X = null;
            point1Y = null;
        }
    }


    if (document.getElementById('selectshape').value == "triangle")
    {
        if (mouseIsPressed)
        {
            background(backgroundColor);
            if (point1X == null && point1Y == null)
            {
                point1X = mouseX;
                point1Y = mouseY;
            }

            // Draw a Rectangle, size from where mouse position was clicked(and held) to where the mouse was dragged
            noFill();
            strokeWeight(2);
            triangle(mouseX -50, mouseY - 50, mouseX + 50, mouseY + 50, mouseX - 50, mouseY + 50);
        }
        else
        {
            point1X = null;
            point1Y = null;
        }
    }
}