//Budget Controller
var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type) {
        var sum = 0;

        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
    };

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

    return {
        addItem: function(type, desc, val) {
            var newItem, ID;

            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            if(type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else if(type == 'inc') {
                newItem = new Income(ID, desc, val);
            }
            data.allItems[type].push(newItem);
            return newItem;
        },

        deleteItem: function(type, id) {
            var ids, index;
            
            ids = data.allItems[type].map(function(current) { 
                return current.id;
            });
            index = ids.indexOf(id);
            if(index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },

        calculateBudget: function() {
            //total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            //calculate the budget income - expsenses
            data.budget = data.totals.inc - data.totals.exp;
            //percent of expenses
            if(data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },

        testing: function() {
            console.log(data);
        }
    };

})();


//UI Controller
var uiController = (function() {
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, //inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };
        },

        addListItem: function(obj, type) {
            var html, element, newHtml;

            // 1. Fetch the HTML

            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            //Update the HTML
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            //Add to UI
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

            // 5. Calculate the budget

            // 6. Display the budget
        },

        deleteListItem: function(selectorID) {
            el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        clearField: function() {
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array){
                current.value = "";
            });

            fieldsArr[0].focus();
        },

        displayBudget: function(obj) {
            document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMStrings.incomLabel).textContent = obj.totalInc;
            document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExp;
            if (obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = "---";
            }

            // budgetLabel: '.budget__value',
            // incomLabel: '.budget__income--value',
            // expsensesLabel: '.budget__expense--value',
            // percentageLabel: '.budget__expsense--percentage'
        },
        getDomStrings: function() {
            return DOMStrings;
        }
    };

}) ();


//Global App Controller
var controller = (function(bdgtCtrol, UICtrl) {

    var setupEventListeners = function() {

        var dom = UICtrl.getDomStrings();

        document.querySelector(dom.inputBtn).addEventListener('click', ctrlAddItem);

            document.addEventListener('keypress', function(event){
                if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

        document.querySelector(dom.container).addEventListener('click', ctrlDeleteItem);
    };

    var ctrlAddItem = function() {
        var input, newItem;

        // 1. Get field and input data
        input = UICtrl.getInput();

        if(input.description !== "" && !isNaN(input.value) && input.value > 0) {
        // 2. Add item to the budget controller
            newItem = bdgtCtrol.addItem(input.type, input.description, input.value);
        // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);
        // 4. Clear the fields
            UICtrl.clearField();
        //Update the budget
            updateBudget();
        }
    };

    var ctrlDeleteItem = function(event) {
        var itemID, splitID, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        splitID = itemID.split('-');
        type = splitID[0];
        ID = parseInt(splitID[1]);

        // 1. delete item from the data structure
        bdgtCtrol.deleteItem(type, ID);
        // 2. Delete from the UI
        uiController.deleteListItem(itemID);
        // 3. Recalculate Budget
        updateBudget();
        // 4. Update Percntages
    };

    var updateBudget = function() {
        // Calculate the Budget
        bdgtCtrol.calculateBudget();
        // Return the budget
        var budget = bdgtCtrol.getBudget();
        // Display the Budget on the UI
        UICtrl.displayBudget(budget);
    }

    return {
        init: function() {
            console.log('application has started');
            setupEventListeners();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1});
        }
    };

})(budgetController, uiController);

controller.init();








/*
//Budget Controller
var budgetController = (function(){
    var x = 10;

    return {
        publictest: function(b) {
            console.log(b);
        }
    }
})();

//calling the publictest method
budgetController.publictest(1);


var budgetController = (function() {
    var x = 10;

    return {
        publictest: function(b) {
            console.log(x + b);
        }
    }
})();

// console.log(x); //x is not defined
// console.log(budgetController.scheme); //returns undefined

budgetController.publictest(2);
*/

