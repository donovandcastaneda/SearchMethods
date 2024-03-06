const adjacencies = `
Anthony,Bluff_City
Bluff_City,Kiowa
Kiowa,Attica
Attica,Harper
Attica,Medicine_Lodge
Augusta,Winfield
Winfield,Andover
Andover,Leon
Leon,Wichita
Caldwell,South_Haven
South_Haven,Bluff_City
Bluff_City,Mayfield
El_Dorado,Towanda
Towanda,Andover
Andover,Augusta
Augusta,Emporia
Florence,McPherson
McPherson,Hillsboro
Hillsboro,El_Dorado
Greensburg,Coldwater
Coldwater,Pratt
Harper,Anthony
Anthony,Argonia
Argonia,Rago
Hutchinson,Newton
Newton,Haven
Junction_City,Abilene
Abilene,Marion
Marion,Manhattan
Manhattan,Topeka
Kingman,Cheney
Cheney,Pratt
Pratt,Hutchinson
Marion,McPherson
McPherson,Newton
Newton,Emporia
Mayfield,Wellington
Wellington,Caldwell
Caldwell,Argonia
McPherson,Salina
Salina,Lyons
Lyons,Hillsboro
Medicine_Lodge,Attica
Attica,Kiowa
Kiowa,Coldwater
Newton,McPherson
McPherson,Hutchinson
Hutchinson,Florence
Rago,Viola
Viola,Sawyer
Salina,Abilene
Abilene,Hays
Sawyer,Pratt
Pratt,Zenda
Wellington,Oxford
Oxford,Mayfield
Mayfield,Mulvane
Mulvane,South_Haven
Wichita,Derby
Derby,Clearwater
Clearwater,Cheney
Cheney,Mulvane
Mulvane,Andover
Andover,Newton
Newton,El_Dorado`.trim().split('\n');

const graph = new Map();

adjacencies.forEach(pair => {
    const [city1, city2] = pair.split(',');
    if (!graph.has(city1)) {
        graph.set(city1, []);
    }
    if (!graph.has(city2)) {
        graph.set(city2, []);
    }
    graph.get(city1).push(city2);
    graph.get(city2).push(city1); // Ensure bidirectional connection
});
