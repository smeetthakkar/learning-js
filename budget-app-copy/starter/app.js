//Budget Controller & Calcs
var budgetController = function() {

    //constructor for expense and incomes
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome) {
        if(totalIncome > 0){
            this.percentage = Math.round((this.value/totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    }

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var calculateTotal = function(type) {
        var sum = 0;

        data.allItems[type].forEach(function(cur) {
            sum+= cur.value;
        });

        data.totals[type] = sum;
    };

    //Hold the inc and exp data
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    return{
        addItem: function(type, desc, val) {
            var newItem, ID;
            //1, 2, 3, 4. len = 4 - 1.

            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            if(type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, desc, val);
            }

            //push to the type array
            data.allItems[type].push(newItem);

            //pass new Item
            return newItem;
        },
        deleteItem: function(type, id) {
            var ids, index;

            ids = data.allItems[type].map(function(current) {
                return current.id;
            });

            index = ids.indexOf(ids);
            if(id !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },

        calculateBudget: function() {
            //1. calculate total = income + expense
            calculateTotal('exp');
            calculateTotal('inc');

            //2. calc budget = inc - exp
            data.budget = data.totals.inc - data.totals.exp;
            //3. calc percentages = inc/exp * 100
            if(data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },

        calculatePercentages: function(){
            data.allItems.exp.forEach(function(cur) {
                cur.calcPercentage(data.totals.inc);
            });
        },

        getPercentages: function(){
            var allPerc = data.allItems.exp.map(function(cur) {
                return cur.getPercentage();
            });
            return allPerc;
        },

        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },
        testing: function() {
            console.log(data);
        }
    }

}();


//Control changes on the UI
var uiController = function() {
    var domStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        percentageExpLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    }

    var nodeListForEach = function(list, callback) {
        for (let i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };

    var formatNumber = function(num, type) {

        //input -2310, convert to 2310.00
        //input +3500.2345 convert to 3500.2345
        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.')
        int = numSplit[0];

        if(int.length > 3) {
            //235023 -> 235,023
            //2340 -> 2,340

            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length-3, 3);
        }
        dec = numSplit[1];
        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;

    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(domStrings.inputType).value,
                description: document.querySelector(domStrings.inputDescription).value,
                value: parseFloat(document.querySelector(domStrings.inputValue).value)
            }
        },

        addListItem: function(obj, type) {
            var html, newHtml, el;

            if (type === 'inc') {
                el = domStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                el = domStrings.expenseContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

            document.querySelector(el).insertAdjacentHTML('beforeend', newHtml)
        },

        deleteListItem: function(selectorID) {
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        displayBudget: function(obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(domStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(domStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(domStrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            if(obj.totalInc > 0) {
                document.querySelector(domStrings.percentageLabel).textContent = obj.percentage;
            } else {
                document.querySelector(domStrings.percentageLabel).textContent = '---';
            }
        },

        displayPercentages: function(percentages){

            var fields = document.querySelectorAll(domStrings.percentageExpLabel);

            nodeListForEach(fields, function(current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });
        },

        displayMonth: function() {
            var now, months, month, year;

            now = new Date();
            months = ['January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth();
            year = now.getFullYear();

            document.querySelector(domStrings.dateLabel).textContent = months[month] + ' ' + year;
        },

        clearField: function() {
            var fields, fieldsArr;

            fields = document.querySelectorAll(domStrings.inputDescription + ', ' + domStrings.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function(current) {
                current.value = "";
            });
            fieldsArr[0].focus();
        },

        changedType: function() {

            var fields = document.querySelectorAll(
                domStrings.inputType + ',' +
                domStrings.inputDescription + ',' +
                domStrings.inputValue
            );

            nodeListForEach(fields, function(cur) {
                cur.classList.toggle('red-focus');
            });

            document.querySelector(domStrings.inputBtn).classList.toggle('red');
        },

        getDomStrings: function() {
            return domStrings;
        }
    }
}();

//Global App Controller
var controller = function(budgetCtrl, uiCtrl) {

    var setupEventListener = function() {
        var DOM = uiCtrl.getDomStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(e){
            if(e.keyCode == 13 && e.which === 13) {
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', uiCtrl.changedType);
    };

    var updateBudget = function() {
        //1. Calculate the Budget
        budgetCtrl.calculateBudget();
        //2. Return the Budget
        var budget = budgetCtrl.getBudget();
        //3. Display on UI
        uiCtrl.displayBudget(budget);
    };

    var udpatePercentages = function() {
        //1. Calculate the percentages
        budgetCtrl.calculatePercentages();
        //2. Return the %s
        var percentages = budgetCtrl.getPercentages();

        //3. Update the UI
        uiCtrl.displayPercentages(percentages);
    };

    var ctrlAddItem = function() {
        var input, newItem;

        //1. Get input Elements
        input = uiCtrl.getInput();

        //2. Pass input to Budget Controller to store data
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3. Update the UI
        uiCtrl.addListItem(newItem, input.type);
        //3.1 Clear Field
        uiCtrl.clearField();

        //4. Calculate and update the Budget
        updateBudget();

        //5. Calculate and update %'s
        udpatePercentages();
    };

    var ctrlDeleteItem = function(event) {

        var itemID, splitID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        splitID = itemID.split('-');
        type = splitID[0];
        id = splitID[1];

        //Delete the item from the data structure
        budgetCtrl.deleteItem(type, id);

        //Delete from the UI
        uiCtrl.deleteListItem(itemID);

        //Recalculate the budget
        updateBudget();
    };

    return {
        init: function() {
            uiCtrl.displayMonth();
            setupEventListener();
            uiCtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
        }
    };

}(budgetController, uiController);


controller.init();

/*
let hammerOwner = 'Odin';
avengers();

function avengers() {
    let hammerName = 'Mjolnir'
    hammerOwner = 'thor';
    endgame();
        function endgame() {
            hammerOwner = 'CaptainAmerica';
            let vibranium = 'Shield';
            console.log(hammerOwner + ' owns ' + hammerName + ' & ' + vibranium);
            third();
        }
}

function homeComing() {
    let shooters = 'web';
    let superHero = 'spiderman';
    console.log(superHero + ' has got' + shooters + ' but not ' + hammerName + ' or ' + vibranium);
}
*/