document.addEventListener('DOMContentLoaded',() => {
    let mainDiv = document.getElementById('mainContainer');

    //header
    let header = document.createElement('h1')
    header.setAttribute('id','header')
    header.innerHTML = 'PRODUCTS'
    mainDiv.appendChild(header)

    //div-1
    let div1 = document.createElement('div')
    div1.setAttribute('id','div_1')
    let input1 = document.createElement('input')
    input1.setAttribute('id','input_1')
    input1.placeholder = 'Enter the title of a product'
    let select1 = document.createElement('select')
    select1.setAttribute('id','select_1')
    div1.appendChild(input1)
    div1.appendChild(select1)
    mainDiv.appendChild(div1)

    //div-2
    let div2 = document.createElement('div')
    div2.setAttribute('id','div_2')
    let input2 = document.createElement('input')
    input2.setAttribute('id','input_2')
    input2.placeholder = 'Enter the brand of a product'
    let select2 = document.createElement('select')
    select2.setAttribute('id','select_2')
    mainDiv.appendChild(div2).appendChild(input2)
    div2.appendChild(select2)

    //div-3
    let div3 = document.createElement('div')
    div3.setAttribute('id','div_3')
    let input3 = document.createElement('input')
    input3.setAttribute('id','input_3')
    let select3 = document.createElement('select')
    select3.setAttribute('id','select_3')
    input3.placeholder = 'Enter the category of a product'
    mainDiv.appendChild(div3).appendChild(input3)
    div3.appendChild(select3)

    //listener for text
    document.getElementById('input_1').addEventListener('keypress', handleTextChange1)
    document.getElementById('input_2').addEventListener('keypress', handleTextChange2)
    document.getElementById('input_3').addEventListener('keypress', handleTextChange3)

    //listener for value
    document.getElementById('select_1').addEventListener('change', handleValueChange1)
    document.getElementById('select_2').addEventListener('change', handleValueChange2)
    document.getElementById('select_3').addEventListener('change', handleValueChange3)
}) 

function handleValueChange1 (e) {
    console.log(e.target.value);
    let changeValue1 = document.getElementById('input_1')
    changeValue1.value = e.target.value
}
function handleValueChange2 (e) {
    console.log(e.target.value);
    let changeValue2 = document.getElementById('input_2')
    changeValue2.value = e.target.value
}
function handleValueChange3 (e) {
    console.log(e.target.value);
    let changeValue3 = document.getElementById('input_3')
    changeValue3.value = e.target.value
}
async function handleTextChange1(e) {
    let select = document.getElementById('select_1')
    let product = []
    let inputValue = e.target.value;
    console.log(inputValue);
    const response = await fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((products) =>products.products)
      .then(products => {
            for(let title of products) {
                console.log(products);
                product.push(title.title);
                console.log(product);
            }
            if(inputValue.length) {
                while(select.options.length) {
                    select.options.remove(0)
                    console.log(select.options);
                }
                for(productValue of product) {
                    if(productValue.startsWith(inputValue)) {
                        let option1 = document.createElement('option');
                        option1.setAttribute('value',productValue);
                        option1.innerHTML = productValue;
                        select.appendChild(option1);
                    }
                }
            }
        }).catch(function(error) {
        console.log(error);
    });
}

async function handleTextChange2(e) {
    let select = document.getElementById('select_2')
    let product = []
    let inputValue = e.target.value;
    console.log(inputValue);
      const response = await fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((products) =>products.products)
        .then(products => {
            for(let brand of products) {
                product.push(brand.brand);
            }
            if(inputValue.length) {
                while(select.options.length) {
                    select.options.remove(0)
                    console.log(select.options);
                }
                for(productValue of product) {
                    if(productValue.startsWith(inputValue)) {
                        let option1 = document.createElement('option');
                        option1.setAttribute('value',productValue);
                        option1.innerHTML = productValue;
                        select.appendChild(option1);
                    }
                }
            }
        }).catch(function(error) {
            console.log(error);
    });
}

async function handleTextChange3 (e) {
    let select = document.getElementById('select_3')
    let product = []
    let inputValue = e.target.value;
    console.log(inputValue);
      const response = await fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((products) =>products.products)
        .then(products => {
            for(let category of products) {
                product.push(category.category);
                console.log(product);
            }
            if(inputValue.length) {
                while(select.options.length) {
                    select.options.remove(0)
                    console.log(select.options);
                }
                for(productValue of product) {
                    if(productValue.startsWith(inputValue)) {
                        let option3 = document.createElement('option');
                        option3.setAttribute('value',productValue);
                        option3.innerHTML = productValue;
                        select.appendChild(option3);
                    }
                }
            }
        }).catch(function(error) {
            console.log(error);
    });
}


