document.addEventListener('DOMContentLoaded', () => {
    loadAnimals('cats');
});

function loadAnimals(type) {
    const data = {
        cats: [
            { name: 'Persian Cat', origin: 'Iran', image: 'https://www.dutch.com/cdn/shop/articles/shutterstock_538333303.jpg?v=1683242960', details: 'The Persian cat, renowned for its luxurious long fur and distinctive flat face, exudes an aura of elegance and grace. these felines have captivated humans for centuries with their striking appearance and calm demeanor. Their affectionate nature makes them beloved companions, often seeking out cozy spots for lounging and gentle affection from their human counterparts.' },
            { name: 'Siamese Cat', origin: 'Thailand', image: 'https://www.catster.com/wp-content/uploads/2023/11/Siamese-Cat_Andreas-LischkaPixabay.jpg', details: 'The Siamese cat, with its sleek body, striking blue almond-shaped eyes, and distinctive color points, embodies a captivating allure.these felines are celebrated for their vocal nature and strong bond with their human companions. Renowned for their intelligence and playful demeanor, Siamese cats thrive on interaction and are known to form deep attachments with their families.' },
            { name: 'Maine Coon', origin: 'United States', image: 'https://a.storyblok.com/f/176726/1087x721/eb6a30b21c/facts-about-maine-coon-cats.jpeg/m/1600x0', details: 'The Maine Coon, long-haired breed, boasts a majestic appearance with its tufted ears, bushy tail, and robust physique.Maine Coons often form strong bonds with their human families and are adept hunters.' },
            { name: 'Bengal Cat', origin: 'United States', image: 'https://www.petssatisfaction.com/cdn/shop/articles/Bengal-cat-on-bed_1024x.jpg?v=1704905074', details: 'Renowned for their intelligence and energetic nature, Bengals thrive in active households and enjoy interactive play. Wild appearance.' },
            { name: 'Sphynx Cat', origin: 'Canada', image: 'https://paradepets.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MjAyMDQ4Nzk3MTkzMjgzMTg1/sphynx-cat.jpg', details: 'Sphynx cat, characterized by its hairless body, wrinkled skin, and large ears, captivates with its unique appearance and affectionate personality.' },
            { name: 'Ragdoll', origin: 'United States', image: 'https://www.thesprucepets.com/thmb/17UY4UpiMekV7WpeXDziXsnt7q4=/1646x0/filters:no_upscale():strip_icc()/GettyImages-145577979-d97e955b5d8043fd96747447451f78b7.jpg', details: 'The Ragdoll cat, known for its striking blue eyes, semi-long silky fur, and gentle demeanor, epitomizes tranquility and affection.' },
            { name: 'British Shorthair', origin: 'United Kingdom', image: 'https://www.catster.com/wp-content/uploads/2023/11/british-shorthair_FotoMirta_Shutterstock.jpg', details: 'The British Shorthair, with its plush coat and round face, embodies a dignified yet friendly presence, known for its laid-back demeanor and affectionate nature.' },
            { name: 'Russian Blue', origin: 'Russia', image: 'https://rawznaturalpetfood.com/wp-content/uploads/russian-blue-cats.jpg', details: 'Russian Blues captivate with their striking silver-blue coat, emerald eyes, and elegant physique, showcasing an intelligent and reserved personality with a penchant for forming deep bonds with their human companions.' },
            { name: 'Abyssinian', origin: 'Egypt', image: 'https://www.thesprucepets.com/thmb/MigiLYeVSJcj0zkNVkJ--rALMZI=/2121x0/filters:no_upscale():strip_icc()/GettyImages-165827729-efc11c02690f457a81ef6ccbfa8eb34d.jpg', details: 'Abyssinians, with their distinctive ticked coat and lively personalities, exude an adventurous spirit and are known for their curiosity and athleticism.' },
            { name: 'Scottish Fold', origin: 'Scotland', image: 'https://images.ctfassets.net/440y9b545yd9/3mXEPSN2Ap12wAnFz8dVm2/8b34d9e82f41b11fcee66cc1fc741724/Scottish_fold_5_things_hero850.jpg', details: 'Scottish Folds, characterized by their distinctive folded ears, boast a sweet and gentle disposition, often forming close attachments with their families and enjoying interactive play.' }
        ],
        dogs: [
            { name: 'Golden Retriever', origin: 'Scotland', image: 'https://13630656.rocketcdn.me/wp-content/uploads/2020/01/Golden4.jpg.webp', details: 'Friendly and tolerant.' },
            { name: 'German Shepherd', origin: 'Germany', image: 'https://i.natgeofe.com/n/187b3223-0b45-4aa5-ae5c-24793dd2d6cb/01-german-shepherd-coronavirus-bwtkdt_3x2.jpg', details: 'Intelligent and versatile.' },
            { name: 'Labrador Retriever', origin: 'Canada', image: 'https://www.marthastewart.com/thmb/gCXKR-31DYnpsLi7uUj0S4zyfqc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/happy-labrador-retriever-getty-0322-2000-eb585d9e672e47da8b1b7e9d3215a5cb.jpg', details: 'Gentle and friendly.' },
            { name: 'Bulldog', origin: 'England', image: 'https://cdn.britannica.com/07/234207-050-0037B589/English-bulldog-dog.jpg', details: 'Medium-sized with a wrinkled face.' },
            { name: 'Poodle', origin: 'Germany', image: 'https://www.dogster.com/wp-content/uploads/2024/02/red-toy-poodle-dog-at-the-park_Mykhaylo_Kozelko_Shutterstock.jpg', details: 'Active and intelligent.' },
            { name: 'Beagle', origin: 'England', image: 'https://www.thesprucepets.com/thmb/slg48hln7ejv_3XYrcdLG8ooKwE=/2119x0/filters:no_upscale():strip_icc()/GettyImages-475324140-292c4ecfd73c4c8483efe31193f8189a.jpg', details: 'Small and hound breed.' },
            { name: 'Yorkshire Terrier', origin: 'England', image: 'https://cdn.britannica.com/49/233849-050-2ECC4F03/Yorkshire-terrier-dog-running.jpg', details: 'Small and toy breed.' },
            { name: 'Dachshund', origin: 'Germany', image: 'https://www.simpsonspremium.com/cdn/shop/articles/dachshund.jpg?v=1636106720', details: 'Long-bodied and short-legged.' },
            { name: 'Boxer', origin: 'Germany', image: 'https://cdn.britannica.com/46/233846-050-8D30A43B/Boxer-dog.jpg', details: 'Medium-sized and muscular.' },
            { name: 'Shih Tzu', origin: 'China', image: 'https://cdn.britannica.com/05/234205-050-F8D2E018/Shih-tzu-dog.jpg', details: 'Small and toy breed.' }
        ],
        birds: [
            { name: 'Parrot', origin: 'Central America', image: 'https://scx2.b-cdn.net/gfx/news/hires/2022/unravelling-the-myster.jpg', details: 'Known for mimicking sounds.' },
            { name: 'Canary', origin: 'Macaronesia', image: 'https://images.ctfassets.net/yewqr8zk7e5s/migrated-4817/31ed6a1cd65e784b53c701caa52e0e68/canary-breach-detection.jpg?w=1000&h=667&fl=progressive&q=50&fm=jpg', details: 'Famous for singing.' },
            { name: 'Cockatiel', origin: 'Australia', image: 'https://www.thesprucepets.com/thmb/yMixSt-B9KOLTiNy12J6OGgHVi0=/3000x0/filters:no_upscale():strip_icc()/cockatiels-as-pets-1236728-hero-78cbdaa2b96343a7bd3c11d4117fb931.jpg', details: 'Affectionate and friendly.' },
            { name: 'Lovebird', origin: 'Africa', image: 'https://www.thesprucepets.com/thmb/n3Qd_mormQUK1HbGn604p1UtMlc=/1280x0/filters:no_upscale():strip_icc()/lovebirds130853820-resized-58a6f2a33df78c345b6314f1.jpg', details: 'Small and social.' },
            { name: 'Macaw', origin: 'South America', image: 'https://www.marylandzoo.org/wp-content/uploads/2017/10/green-winged-macaw-2022.jpg', details: 'Large and colorful.' },
            { name: 'Budgerigar', origin: 'Australia', image: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/123378071/900', details: 'Small and social.' },
            { name: 'Finch', origin: 'Worldwide', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Pyrrhula_pyrrhula_female_2.jpg/1200px-Pyrrhula_pyrrhula_female_2.jpg', details: 'Small and seed-eating.' },
            { name: 'Cockatoo', origin: 'Australia', image: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/117500151/1200', details: 'Large and crested.' },
            { name: 'African Grey Parrot', origin: 'Africa', image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Psittacus_erithacus_-perching_on_tray-8d.jpg', details: 'Highly intelligent.' },
            { name: 'Amazon Parrot', origin: 'South America', image: 'https://birdvetmelbourne.com/wp-content/uploads/2023/04/IMG_8388-scaled.jpeg', details: 'Large and talkative.' }
        ]
    };

    displayAnimals(data[type]);
}

function displayAnimals(animals) {
    const container = document.getElementById('animal-cards');
    container.innerHTML = '';

    animals.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${animal.image}" alt="${animal.name}">
            <h3>${animal.name}</h3>
            <p>Origin: ${animal.origin}</p>
        `;
        card.onclick = () => showModal(animal);
        container.appendChild(card);
    });
}

function showModal(animal) {
    const modal = document.getElementById('animal-modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <img src="${animal.image}" alt="${animal.name}" style="max-width: 100%;">
        <h3>${animal.name}</h3>
        <p>Origin: ${animal.origin}</p>
        <p>Details: ${animal.details}</p>
    `;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('animal-modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('animal-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function searchAnimals() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const cards = document.getElementsByClassName('card');

    Array.from(cards).forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        if (name.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


function displayEventSchedule(events) {
    const container = document.getElementById('schedule-container');
    container.innerHTML = '';

    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'event';
        eventDiv.innerHTML = `
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>Time: ${event.time}</p>
            <p>Location: ${event.location}</p>
            <p>Description: ${event.description}</p>
        `;
        container.appendChild(eventDiv);
    });
}
const events = [
    { title: 'Pet Show', date: 'June 10, 2024', time: '10:00 AM - 2:00 PM', location: 'Tirana Pet Main Stage', description: 'Experience the spectacle of the Pet Talent Showcase, where the most talented and charismatic animal performers take the stage to dazzle and delight audiences of all ages! From gravity-defying tricks and agility feats to heartwarming displays of obedience and intelligence, witness the extraordinary abilities of our furry, feathered, and scaled stars. Marvel at the agility of acrobatic dogs, the grace of dancing cats, and the agility of nimble birds as they showcase their skills with precision and flair. With each captivating performance, you will be amazed by the bond between humans and animals and inspired by the endless possibilities of pet training and enrichment. Do not miss your chance to be entertained and enchanted by the Pet Talent Showcase, where the spotlight shines brightest on our beloved animal companions!' },
    { title: 'Pet Adoption Drive', date: 'June 11, 2024', time: '12:00 PM - 4:00 PM', location: 'Adoption Area', description: 'Embark on a journey of companionship and unconditional love as you search for your perfect furry friend to bring home and cherish forever. At our adoption event, you will have the opportunity to meet a diverse array of lovable animals eagerly awaiting their chance to find a forever home. From playful kittens and affectionate puppies to mature cats and dogs brimming with wisdom and loyalty, there is a soulful companion just waiting to steal your heart. Each adoptable pet comes with a unique story and a world of potential, ready to become an integral part of your family and fill your home with joy and laughter. Whether you are drawn to a cuddly lap cat, an adventurous canine companion, or a charming small animal, our dedicated team of adoption counselors will guide you every step of the way to ensure a perfect match. Join us in making a difference in the lives of these deserving animals and discover the endless rewards of adopting a furry friend in need. Your new best friend is eagerly awaiting your arrival, ready to embark on a lifelong journey of love and companionship by your side.' },
];
displayEventSchedule(events);

const reviews = [
    { text: 'Great event! My pets loved it.', author: 'John Doe' },
    { text: 'Amazing experience. Would highly recommend.', author: 'Jane Smith' }
];

displayReviews(reviews);