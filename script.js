const CHECKED_SRC = "images/checked.png";
const UNCHECKED_SRC = "images/unchecked.png";
const footer = document.querySelector('footer');
const header = document.querySelector('#titolo');
const parag = document.querySelector('#paragrafo');
const bottone = document.querySelector('button');


function checkEnd(container)
{
    if (Object.keys(taken).length === 3)
    {
        for (box of boxes)
        {
            if (box.dataset.questionId === "one")
            {
                box.removeEventListener('click', selectOne);
                nsOne.pop(box.dataset.choiceId);
            }
            else if (box.dataset.questionId === "two")
            {
                box.removeEventListener('click', selectTwo);
                nsTwo.pop(box.dataset.choiceId);
            }
            else
            {
                box.removeEventListener('click', selectThree);
                nsThree.pop(box.dataset.choiceId);
            }
        }
        results();
    }
}

function restart()
{

    document.documentElement.scrollTop = 0;
    nsOne = [];
    nsTwo = [];
    nsThree = [];
    taken = {};
    const boxes = document.querySelectorAll('.choice-grid div');

    for (const box of boxes)
    {
        footer.classList.add('hidden');
        const image = document.createElement('img');
        const square = box.querySelector('.checkbox');
        square.classList.replace("checkbox", "hidden");
        image.src = UNCHECKED_SRC;
        image.classList.add("checkbox");
        box.appendChild(image);
        box.classList.replace("notSelected", "base");
        box.classList.replace("selected", "base");
        
        if (box.dataset.questionId === 'one')
        {
            box.addEventListener('click', selectOne);
            nsOne.push(box);
        }
        else if (box.dataset.questionId === "two")
        {
            box.addEventListener('click', selectTwo);
            nsTwo.push(box);
        }
        else
        {
            box.addEventListener('click', selectThree);
            nsThree.push(box);
        }
    }

}

function results()
{
    

    if (taken[1] === taken[2])
    {
        console.log(taken[2]);
        header.textContent = RESULTS_MAP[taken[1]].title;
        parag.textContent = RESULTS_MAP[taken[1]].contents;
    }
    else {
        header.textContent = RESULTS_MAP[taken[0]].title;
        parag.textContent = RESULTS_MAP[taken[0]].contents;
    }

    footer.classList.remove('hidden');
    bottone.addEventListener('click', restart);

}




function selectOne(event)
{
    const container = event.currentTarget;
    const image = document.createElement('img');
    const square = container.querySelector('.checkbox');
    square.classList.replace("checkbox", "hidden");
    image.src = CHECKED_SRC;
    image.classList.add("checkbox");
    container.appendChild(image);
    container.classList.replace("base", "selected");
    container.classList.replace("notSelected", "selected");
    for(box of nsOne)
    {
        if (box !== container)
        {
            const image = document.createElement('img');
            const square = box.querySelector('.checkbox');
            square.classList.replace("checkbox", "hidden");
            image.src = UNCHECKED_SRC;
            image.classList.add("checkbox");
            box.appendChild(image);
            box.classList.replace("base", "notSelected");
            box.classList.replace("selected", "notSelected");
        }

        else taken[0]= container.dataset.choiceId;

    }
    checkEnd(container);
}

function selectTwo(event)
{
    const container = event.currentTarget;
    const image = document.createElement('img');
    const square = container.querySelector('.checkbox');
    square.classList.replace("checkbox", "hidden");
    image.src = CHECKED_SRC;
    image.classList.add("checkbox");
    container.appendChild(image);
    container.classList.replace("base", "selected");
    container.classList.replace("notSelected", "selected");
    for(box of nsTwo)
    {
        if (box !== container)
        {
            const image = document.createElement('img');
            const square = box.querySelector('.checkbox');
            square.classList.replace("checkbox", "hidden");
            image.src = UNCHECKED_SRC;
            image.classList.add("checkbox");
            box.appendChild(image);
            box.classList.replace("base", "notSelected");
            box.classList.replace("selected", "notSelected");

        }

        else taken[1]=container.dataset.choiceId;

    }
    checkEnd(container);
}

function selectThree(event)
{
    const container = event.currentTarget;
    const image = document.createElement('img');
    const square = container.querySelector('.checkbox');
    square.classList.replace("checkbox", "hidden");
    image.src = CHECKED_SRC;
    image.classList.add("checkbox");
    container.appendChild(image);
    container.classList.replace("base", "selected");
    container.classList.replace("notSelected", "selected");
    for(box of nsThree)
    {
        if (box !== container)
        {
            const image = document.createElement('img');
            const square = box.querySelector('.checkbox');
            square.classList.replace("checkbox", "hidden");
            image.src = UNCHECKED_SRC;
            image.classList.add("checkbox");
            box.appendChild(image);
            box.classList.replace("base", "notSelected");
            box.classList.replace("selected", "notSelected");

        }

        else taken[2]=container.dataset.choiceId;

    }
    checkEnd(container);
}

//main

var nsOne = [];
var nsTwo = [];
var nsThree = [];
var taken = {};
const boxes = document.querySelectorAll('.choice-grid div');

for (const box of boxes)
{
    
    if (box.dataset.questionId === 'one')
    {
        box.addEventListener('click', selectOne);
        nsOne.push(box);
    }
    else if (box.dataset.questionId === "two")
    {
        box.addEventListener('click', selectTwo);
        nsTwo.push(box);
    }
    else
    {
        box.addEventListener('click', selectThree);
        nsThree.push(box);
    }
}