// unction showAllPets()========================

function showAllPets(){

    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    .then(res=> res.json())
    .then(data => showAllPetCard(data.pets))
}

function showAllPetCard(pets){
  
     let mainDiv = document.getElementById('mainDiv')
     mainDiv.innerHTML = ''

     if(pets.length === 0){
      mainDiv.classList.add('auto')
       let div =  document.createElement('div');
       div.classList.add('mx-auto', 'w-3/4')
        div.innerHTML = `
        <div class="flex justify-center items-center border-2 w-full mx-auto">
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
        let {breed ,gender,date_of_birth,price,image,pet_name,petId} = pet;
        let div = document.createElement('div');
        div.innerHTML = `
           <div class="card card-compact bg-base-100 shadow p-1.5">
  <figure>
    <img
      src=${image} class="rounded"/>
  </figure>
  <div class="card-body p-2">
    <h2 class="card-title text-lg">${pet_name || 'Not Available'}</h2>
    <p class="text-sm text-gray-500 pb-0.5 font-semibold"><i class="fa-brands fa-dropbox"></i> Breed: ${breed || 'Not Available'} </p>
    <p class="text-sm text-gray-500 pb-0.5 font-semibold"><i class="fa-regular fa-calendar-days"></i> Birth: ${date_of_birth || 'Not Available'}</p>
    <p class="text-sm text-gray-500 pb-0.5 font-semibold"><i class="fa-solid fa-venus"></i> Gender:${gender || 'Not Available'}</p>
    <p class="text-sm text-gray-500 pb-0.5 font-semibold"><i class="fa-solid fa-dollar-sign"></i> Price: ${price  || 'Not Available'} $</p>
  </div>
  <div class="grid grid-cols-3 gap-3 p-2 border-2 rounded-lg">
              <button onclick="petsImage('${image}')"><i class="fa-regular fa-thumbs-up  border-2 px-3 py-0.5 rounded-md"></i>
              </button>          
              <button class="btn btn-outline btn-accent btn-xs" onclick="modalVai()">Adapt</button>
               <button class="btn btn-outline btn-accent btn-xs" onclick="showModal(${petId})">Details</button>
    </div>
</div>
        `
        mainDiv.appendChild(div)
     });
}



// count modal  btn =================================

let a = 3;
function modalVai(){

  setInterval(()=>{
    a--;
    let countDiv = document.getElementById('countDiv');
    let div = document.getElementById('div'); 
    div.innerText = a;

    if(a === 0){
      // countDiv.classList.add('hidden');
      let closeClick = document.getElementById('closeClick');
      closeClick.click()
      clearInterval(countDiv)
    }   
  },1500)
  

  my_modal_3.showModal()

  
}

// showModal() ======================

function showModal(petId) {
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
  .then(res=> res.json())
  .then(data => openModal(data.petData))
  
}

function openModal(petdata){
    console.log(petdata);

    let {date_of_birth,gender,image,pet_details ,pet_name,price,vaccinated_status,breed} = petdata;
    console.log(date_of_birth);

    let modal = document.getElementById('modal');
    modal.innerHTML =`
        <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <figure>
    <img
      src=${image} class="w-full rounded-md"/>
  </figure>
  <div class="card-body p-2">
    <h2 class="card-title text-xl">${pet_name || 'Not Available'}</h2>

    <div class="grid grid-cols-2">
         <p class="text-sm text-gray-500 pb-0.5 font-semibold"><i class="fa-solid fa-bread-slice"></i> Breed: ${breed || 'Not Available'}</p>
         <p class="text-sm text-gray-500 pb-0.5 font-semibold"><i class="fa-regular fa-calendar"></i> Birth: ${date_of_birth || 'Not Available'}</p>
         <p class="text-sm text-gray-500 pb-0.5 font-semibold"><i class="fa-solid fa-venus"></i> Gender:${gender || 'Not Available'}</p>
         <p class="text-sm text-gray-500 pb-0.5 font-semibold"><i class="fa-solid fa-viruses"></i> vaccine: ${vaccinated_status || 'Not Available'}</p>
         <p class="text-sm text-gray-500 pb-0.5 font-semibold">$ Price: ${price || 'Not Available'} $</p>
    </div>
    
  </div>
    <div class="modal-action flex flex-col">
      <form method="dialog" class="flex flex-col">
        <!-- if there is a button in form, it will close the modal -->
         <h2 class="card-title text-lg">Details</h2>
         <p class="text-sm text-gray-500 pb-2 font-semibold">${pet_details || 'Not Available'}</p>

        <button class="btn font-bold text-green-900 bg-green-300 text-lg">Close</button>

      </form>

    </div>
  </div>
</dialog>
    `

    my_modal_5.showModal()
}



// adaptModal() ========================


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


// making category btn =======================================


function categoryBtn(){
    fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
    .then(res=> res.json())
    .then(data => makecategoryBtn(data.categories))
}


function makecategoryBtn(categories){
     console.log(categories);


     let cataBtn = document.getElementById('cataBtn');
     categories.forEach((cat) =>{
        let {category,id ,category_icon} = cat;

        let btn = document.createElement('button')
        btn.setAttribute('id',`btn-${id}`)
     
        btn.innerHTML = `
          <img src=${category_icon} class="w-8">
          <h2 class="font-bold text-lg">${category}</h2>
        `
        btn.classList.add('btn','bg-green-100','flex','gap-1','justify-evenly','btnbtn')
        btn.classList.add('rounded-xl')
        btn.addEventListener('click',()=>fetchByCategory({category}))

        cataBtn.appendChild(btn)
     })
}







// fetch by pets category =====================================

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

// short by price =========================

function shortByprice(){
  console.log('object');

  fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    .then(res=> res.json())
    .then(data => mainShortByprice(data.pets))
}

function mainShortByprice(pets){
    console.log(pets);

    const priceArr = pets.map(pet => pet.price);
    console.log(priceArr);

    pets.sort((a, b) =>  b.price - a.price);
    console.log(pets);

    pets.forEach(()=>{
      showAllPetCard(pets);
    })

}




categoryBtn()
showAllPets()
// shortByprice()