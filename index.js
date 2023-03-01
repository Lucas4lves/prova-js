function returnMatrix(lines, columns)
{
    let matrix = [];
    for(let i = 0; i < lines; i++)
    {
        let col = new Array(columns);
        for(let m = 0; m < columns; m++)
        {
            col[m] = (Math.round(Math.random() * 5));
        }
        matrix.push(col);
    }
    return matrix;
}

let matrix = returnMatrix(10, 10);


function returnMinMax(matrix)
{
    let max = 0;
    let indexOfMax = 0;
    for(let i = 0; i < matrix.length; i++)
    {
        for(let m = 0; m < matrix.length; m++)
        {
            if(matrix[i][m] > max)
            {
                max = matrix[i][m];
                indexOfMax = i;
            }
        }
    }

    console.log("Matriz: ", matrix);
    console.log("\n");
    console.log("FIM DA MATRIZ");
    console.log("Linha do Elemento MAX: ", matrix[indexOfMax]);
    console.log("\n");

    let min = matrix[indexOfMax][0];

    for(let k = 0; k < matrix.length; k++)
    {
        if(matrix[indexOfMax][k] < min)
        {
            min = matrix[indexOfMax][k];
        }
    }

    console.log("\n");

    return min;
}

console.log(returnMinMax(matrix));