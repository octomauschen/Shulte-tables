# Shulte-tables

var app = {
    currentLevel: 1,
    level: [1, 2, 3, 4, 5],
    cellsAmount: 5,
    numbers: [],
    
    run: function(){
        app.displayData();
        app.drawSimpleTable();
    },
    drawSimpleTable: function(){
        for(var i = 0; i < app.cellsAmount * app.cellsAmount; i++){ // Create the array of numbers.
             app.numbers.push(i);       
        }
        // Randomise numbers in the array.
        app.numbers = app.numbers.sort(function(){return .5 - Math.random()});
        
        var table = document.createElement("TABLE");
        document.body.appendChild(table);
        for(var i = 0, k = 0; i < app.cellsAmount; i++){ // Append table rows.
            var tr = document.createElement("TR");
            table.appendChild(tr);
            for(var j = 0; j < app.cellsAmount; j++, k++){ // Append table cells.
                var td = document.createElement("TD");
                tr.appendChild(td);                       
                var t = document.createTextNode(app.numbers[k]);
                td.appendChild(t);
                td.id = app.numbers[k]; // Add id to every cell.
                
                //Depending on level, change the style of cells.
                switch(app.level){
                    case 1:
                        
                        break;
                    case 2:
                        
                        break;
                    case 3:
                        
                        break;
                    case 4: 
                        
                        break;
                    default:
                        
                };
            };
        };
    },
    
    drawDifficultTable: function(){
        // Difficult means both for user and programmer, who creates it.
    },
    
    styleLevel_2: function(){ // Make some cells different color.
    
    },
    
    styleLevel_3: function(){ // Different fonts and cells sizes.
    
    },
    
    styleLevel_4: function(){
    
    },
    
    getUserInput: function(){
    
    },
    compareUserInputWithTarget: function(){
    
    },
    displayData: function(){
        var gameLevel = document.querySelector("#level");
        var data = document.createTextNode(app.currentLevel);
        gameLevel.appendChild(data);
    },
    test: function(){
        alert("works");
    }
};
app.run();
