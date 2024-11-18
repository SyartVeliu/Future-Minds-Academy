let allData = [
    {
        year: "2024",
        name: "Inside Out 2",
        thumb: "inside-out-2.jpeg",
        reviews: "104"
    },
    {
        year: "2023",
        name: "The Taste of Things",
        thumb: "the-taste-of-things.jpeg",
        reviews: "303"
    }
];

let objMovie = {};
objMovie.year = "2030";
objMovie.name = "Shqiptaret e pare ne Hone";
objMovie.thumb = "the=taste-of-things.jpeg";
objMovie.reviews = "444";

allData.push(objMovie);

const allMovies = document.querySelector("#allMovies");
const addBTN = document.querySelector("#addBTN");
const movieModal = document.querySelector("#movieModal");
const cancelBTN = document.querySelector("#cancelBTN");

let recordsHTML = '';
for(let i=0; i<allData.length; i++){
    recordsHTML += "<tr>";
    recordsHTML +=`
                <td>${allData[i].year}</td>
                <td>${allData[i].name}</td>
                <td><img width="50" src="${allData[i].thumb}" alt=""></td>
                <td>${allData[i].reviews}</td>
                <td>
                    <select name="" id="">
                        <option value="">Edit</option>
                        <option value="">Remove</option>
                    </select>
                </td>
    `;
    recordsHTML += "</tr>";
}

allMovies.innerHTML = recordsHTML;

addBTN.addEventListener("click", ()=>{
    movieModal.style.display = "block";
});

cancelBTN.addEventListener("click", ()=>{
    movieModal.style.display = "none";
});