
// function showAllPets()========================

function showAllPets(){

    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    .then(res=> res.json())
    .then(data => showAllPetCard(data.pets))
}

function showAllPetCard(pets){
    //  console.log(pets);

 

     let mainDiv = document.getElementById('mainDiv')
     mainDiv.innerHTML = ''

     if(pets.length === 0){
      mainDiv.classList.add('auto')
       let div =  document.createElement('div');
       div.classList.add('mx-auto', 'w-3/4')
        div.innerHTML = `
        <div class="flex justify-center items-center mx-auto border-2 w-1/2">
             <img src="images/error.webp" class="text-center w-[200px] mx-auto">
       </div>
         <h2 class="font-bold text-lg text-center">No Information Available</h2>
        <p class="text-sm font-semibold text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
        its layout. The point of using Lorem Ipsum is that it has a.</p>
        `
        mainDiv.appendChild(div)

      // mainDiv.innerText = 'no pets found'

      
      }
    
     pets.forEach(pet => {
        // console.log(pet);
        let {breed,gender,date_of_birth,price,image,pet_name
        } = pet;
        let div = document.createElement('div');
        div.innerHTML = `
           <div class="card card-compact bg-base-100 shadow">
  <figure>
    <img
      src=${image} />
  </figure>
  <div class="card-body p-2">
    <h2 class="card-title text-lg">${pet_name}</h2>
    <p class="text-sm text-gray-500 pb-0.5 font-semibold"><i class="fa-solid fa-bread-slice"></i> Breed: ${breed}</p>
    <p class="text-sm text-gray-500 pb-0.5 font-semibold"><i class="fa-regular fa-calendar"></i> Birth: ${date_of_birth}</p>
    <p class="text-sm text-gray-500 pb-0.5 font-semibold"><i class="fa-solid fa-venus"></i> Gender:${gender}</p>
    <p class="text-sm text-gray-500 pb-0.5 font-semibold">$ Price: ${price}</p>
  </div>
  <div class="grid grid-cols-3 gap-3 py-2 px-2">
            <button onclick="petsImage('${image}')"><i class="fa-regular fa-thumbs-up"></i>
            </button>
            
            <button class="btn btn-outline btn-accent btn-xs ">Adapt</button>
            <button class="btn btn-outline btn-accent btn-xs onclick='showModal("${pet}")' ">Detailst</button>
    </div>
</div>
        `
        mainDiv.appendChild(div)
     });
}



function petsImage(img){
  console.log(img);
  let petImg = document.getElementById('petImg');
  let div = document.createElement('div');

//   petImg.innerHTML = `
//             <img src= ${img} class=border-black"> 
//   `
   div.innerHTML = `
             <img src= ${img} class="hight"> 
   `
   petImg.appendChild(div)
}

function categoryBtn(){
    fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
    .then(res=> res.json())
    .then(data => makecategoryBtn(data.categories))
}

function makecategoryBtn(categories){
    //  console.log(categories);

     let cataBtn = document.getElementById('cataBtn');
     categories.forEach((cat) =>{
        // console.log(cat);
        let {category,id  } = cat;

        let btn = document.createElement('button')
        btn.innerText = category
        btn.classList.add('btn','bg-teal-300')
        btn.addEventListener('click',()=>fetchByCategory({category}))


        // console.log(btn);
        cataBtn.appendChild(btn)
     })
}


function  fetchByCategory({category}){
    console.log(category);
    let spin = document.getElementById('spin')
    spin.classList.remove('hidden');

    setTimeout(()=>{
      let spin = document.getElementById('spin')
      spin.classList.add('hidden')
      
      fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
      .then(res=> res.json())
      .then(data => showAllPetCard(data.data))
    },2000)

   



   
}

function showModal(pet){
   console.log(pet);
}









categoryBtn()
showAllPets()
showModal()