
// https://openapi.programming-hero.com/api/phero-tube/categories

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error))
}

const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById("categories");
    categories.forEach((item) => {

        const btn = document.createElement("button");
        btn.classList = "btn";
        btn.innerText = item.category;

        categoriesContainer.append(btn);
    });
}


const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((res) => res.json())
        .then((data) => displayVideos(data.videos))
        .catch((error) => console.log(error));
}


const displayVideos = (videos) => {
    const videoContainer = document.getElementById("videos");
    videos.forEach((video) => {
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML = `
        <figure class="h-[200px]">
            <img
            src="${video.thumbnail}" class="h-full w-full object-cover" />
        </figure>
        <div class="px-0 py-2 flex gap-2 items-center">
            <div>
                <img class="w-10 h-10 rounded-full object-cover" src="${video.authors[0].profile_picture}"/>
            </div>
            <div>
                <h2 class="font-bold text-xl">${video.title}</h2>
                <div class="flex gap-1 items-center">
                <p>${video.authors[0].profile_name}</p>
                <img src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000" class="w-5 h-5 rounded-full object-cover"/>
                </div>
                <p></p>
            </div>
        </div>
       `;
       videoContainer.append(card);

    });
   
}

loadCategories();
loadVideos();