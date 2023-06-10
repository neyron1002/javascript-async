const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCXJ7dKnWVBRBjLwVh3vawLg&part=snippet%2Cid&order=date&maxResults=50';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b10903cdffmshccb2065f44b9b92p1a9d26jsnaa6d00462e10',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const content = null || document.getElementById('content');

console.log(content);

(async function () {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        let view = 
        `
            ${result.items.map( video => 
                `
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" 
                        alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                        </h3>
                    </div>
                </div>
                `
            ).splice(0,4).join('')}
        `;
        console.log('AQUI');
        console.log(view);
        content.innerHTML = view;
    
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
)();