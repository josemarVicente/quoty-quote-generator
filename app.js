const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
const generateBtn = document.getElementById('generate');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const twitter = document.getElementById('twitter-link');
const categoryContainer = document.getElementById('category-container')
const category = [
    {name: 'age'},
    {name: 'alone'},
    {name: 'amazing'},
    {name: 'anger'},
    {name: 'architecture'},
    {name: 'art'},
    {name: 'attitude'},
    {name: 'beauty'},
    {name: 'best'},
    {name: 'birthday'},
    {name: 'business'},
    {name: 'car'},
    {name: 'change'},
    {name: 'communication'},
    {name: 'computers'},
    {name: 'cool'},
    {name: 'courage'},
    {name: 'dad'},
    {name: 'dating'},
    {name: 'death'},
    {name: 'design'},
    {name: 'dreams'},
    {name: 'education'},
    {name: 'environmental'},
    {name: 'equality'},
    {name: 'experience'},
    {name: 'failure'},
    {name: 'faith'},
    {name: 'family'},
    {name: 'famous'},
    {name: 'fear'},
    {name: 'fitness'},
    {name: 'food'},
    {name: 'forgiveness'},
    {name: 'freedom'},
    {name: 'friendship'},
    {name: 'funny'},
    {name: 'future'},
    {name: 'god'},
    {name: 'good'},
    {name: 'government'},
    {name: 'graduation'},
    {name: 'great'},
    {name: 'happiness'},
    {name: 'health'},
    {name: 'history'},
    {name: 'home'},
    {name: 'hope'},
    {name: 'humor'},
    {name: 'imagination'},
    {name: 'inspirational'},
    {name: 'intelligence'},
    {name: 'jealousy'},
    {name: 'knowledge'},
    {name: 'leadership'},
    {name: 'learning'},
    {name: 'legal'},
    {name: 'life'},
    {name: 'love'},
    {name: 'marriage'},
    {name: 'medical'},
    {name: 'men'},
    {name: 'mom'},
    {name: 'money'},
    {name: 'morning'},
    {name: 'movies'},
    {name: 'success'}
];

const fetchQuote = async () =>{
    const response = await
    fetch(`https://api.api-ninjas.com/v1/quotes`, {
        headers: {
        "X-API-KEY": "PEhp/oPiEOr2f1gSj4pLxQ==fLKwpRyUj8chyMTf"
            }
        }
    );

    const data = await response.json();
    console.log(data);
    newQuote(data);
}

window.addEventListener('load', fetchQuote);

//populate the category container
category.forEach((category) => {
    categoryContainer.innerHTML += `
        <label>
            <input type="radio" onclick="handleCategoryCheck()" value="${category.name}" name="category" id="">
            <span>${category.name}</span>
        </label>
    `;
});

//radio buttons functionality
const handleCategoryCheck = () => {
    const radioBtn = document.querySelector('input:checked');
    console.log(radioBtn.value);
}

const newQuote = (data) => {
    quote.innerText = data[0].quote;
    author.innerText = `- ${data[0].author}`;
    if(quote){
        twitter.querySelector('a').href = `https://twitter.com/intent/tweet?text=${data[0].quote}%20-%20${data[0].author}&via=%20-%20quoty`
    } else {
        twitter.querySelector('a').href = `#`;
    }
}
//New Quote Button
generateBtn.addEventListener('click', fetchQuote);
