// console.log("Hello World");
let option = ["All", "Breakfast", "Lunch", "Shakes", "Dinner"]

function options() {
    let html = "";
    for (let i = 0; i < option.length; i++) {
        let element = option[i];
        html += `
        <button class="btn1" onClick="showItem('${element}')">${element}</button>
    `
    }
    let opEle = document.getElementById("buttons");
    opEle.innerHTML = html;
}

options();

let menu = {
    data: [
        {
            category: "Breakfast",
            name: "Butter-milk Pancakes",
            price: 100,
            image: "Images/Buttermilk-Pancakes.jpg",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis ipsa aspernatur repellendus laborum nemo."
        },
        {
            category: "Breakfast",
            name: "Oats",
            price: 100,
            image: "Images/Oats.jpg",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis ipsa aspernatur repellendus laborum nemo."
        },
        {
            category: "Lunch",
            name: "Special Bowl",
            price: 200,
            image: "Images/Lunch.jpeg",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis ipsa aspernatur repellendus laborum nemo."
        },
        {
            category: "Lunch",
            name: "Omlette",
            price: 200,
            image: "Images/Omlette.jpg",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis ipsa aspernatur repellendus laborum nemo."
        },
        {
            category: "Lunch",
            name: "Sandwich",
            price: 200,
            image: "Images/Veg-Sandwich.jpeg",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis ipsa aspernatur repellendus laborum nemo."
        },
        {
            category: "Shakes",
            price: 150,
            name: "Melancholy Milkshake",
            image: "Images/Shakes.jpg",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis ipsa aspernatur repellendus laborum nemo."
        },
        {
            category: "Shakes",
            price: 120,
            name: "Chocolate Milkshake",
            image: "Images/Chocolate Shake.jpg",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis ipsa aspernatur repellendus laborum nemo."
        },
        {
            category: "Shakes",
            price: 100,
            name: "Vanilla-Buttermilk Milkshake",
            image: "Images/Vanilla-Buttermilk Shake.jpg",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis ipsa aspernatur repellendus laborum nemo."
        },
        {
            category: "Dinner",
            price: 250,
            name: "Manchurian",
            image: "Images/Dinner.jpg",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis ipsa aspernatur repellendus laborum nemo."
        },
        {
            category: "Dinner",
            price: 150,
            name: "Veg-Burger",
            image: "Images/Veg-Burger.jpg",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis ipsa aspernatur repellendus laborum nemo."
        },
        {
            category: "Dinner",
            price: 250,
            name: "Chicken Burger",
            image: "Images/Chicken Burger.jpg",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis ipsa aspernatur repellendus laborum nemo."
        },
    ],
};

for (let i of menu.data) {
    let card = document.createElement('div');
    card.classList.add("card1", i.category, "hide");

    let imgBox = document.createElement('div');
    imgBox.classList.add("img-box");

    let image = document.createElement('img');
    image.setAttribute("src", i.image);
    imgBox.appendChild(image);
    card.appendChild(imgBox);

    let container = document.createElement('div');
    container.classList.add("container2");

    let pname = document.createElement("h5");
    pname.classList.add("name", "card-title");
    pname.innerText = i.name.toUpperCase();
    container.appendChild(pname);

    let para = document.createElement('p');
    para.classList.add("para");
    para.innerText = i.desc;
    container.appendChild(para);

    let price = document.createElement("h6");
    price.innerText = "Price:- Rs " + i.price;
    container.appendChild(price);

    let orderNow = document.createElement("button");
    orderNow.classList.add("btn2");
    orderNow.innerText = "Order Now";
    container.appendChild(orderNow);

    card.appendChild(container);

    document.getElementById("items").appendChild(card);
}


function showItem(value) {
    // let btn = document.querySelectorAll('.btn');
    // btn.forEach(button => {
    //     if (value.toUpperCase() == button.innerText.toUpperCase()) {
    //         button.classList.remove('active');
    //     }
    //     else {
    //         button.classList.remove('active');
    //     }
    // });

    let ele = document.querySelectorAll(".card1");
    ele.forEach((item) => {
        if (value == "All") {
            item.classList.remove('hide');
        }
        else {
            if (item.classList.contains(value)) {
                item.classList.remove("hide");
            }
            else {
                item.classList.add("hide");
            }
        }
    });
}

window.onload = () => {
    showItem("All");
}




















