document.addEventListener("DOMContentLoaded", () => {
    const subLinksDiv = document.getElementById('sub-links');
    const videoContentDiv = document.getElementById('video-content');
    const categoryButtons = document.querySelectorAll('.categories button');

    //Menu items
    const recipelist = {
        Breakfasts: [
            { name: 'Tofu cheese', video: 'video/tofu-cheese.mp4' },
            { name: 'Freshly baked buns', video: 'video/bun.mp4' }
        ],
        Appetizers: [
            { name: 'Toastwithcheese', video: 'video/toastwithcheese.mp4' },
            { name: 'sandwich', video: 'video/sandwich.mp4' }
        ],
        Drinks: [
            { name: 'Coffee', video: 'video/coffee.mp4' },
            { name: 'Pineapple Smoothie', video: 'video/smoothie.mp4' }
        ],
        Lunch: [
            { name: 'Biryani', video: 'video/Biryanivideo.mp4' },
            { name: 'Pasta', video: 'video/pasta.mp4' }
        ],
        Dinner: [
            { name: 'Ocean sea soup', video: 'video/oceanseasoup.mp4' },
            { name: 'Grilled Zucchini', video: 'video/dinner2.mp4' }
        ],
        Desserts: [
            { name: 'Ocean Salted pear caramel', video: 'video/salted.mp4' },
            { name: 'Strawberry ice cream', video: 'video/strawberryicecream.mp4' }
        ],
        Snacks: [
            { name: 'Murukku', video: 'video/murukku.mp4' },
            { name: 'Masala mixture', video: 'video/masalamurukku.mp4' }
        ]
    };

    //In case the video is not loaded
    function displayVideo(videoFileName) {
        if (videoFileName) {
            videoContentDiv.innerHTML = `
                <video controls autoplay onerror="this.onerror=null; this.src='fallback.mp4';">
                    <source src="${videoFileName}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        } else {
            videoContentDiv.innerHTML = '<p>Video not available for this recipe.</p>';
        }
    }

   
    function generateSubLinks(category) {
        subLinksDiv.innerHTML = '';  
        const fragment = document.createDocumentFragment();

        
        if (recipelist[category]) {
            recipelist[category].forEach(recipe => {
                const subLinkDiv = createSubLink(recipe);  
                fragment.appendChild(subLinkDiv);  
            });
            subLinksDiv.appendChild(fragment);  
        } else {
            subLinksDiv.innerHTML = '<p>No recipes available for this category.</p>';
        }
    }

    //Function to create subLink for each category
    function createSubLink(recipe) {
        const subLinkDiv = document.createElement('div');
        subLinkDiv.className = 'sub-link';

        const link = document.createElement('a');
        link.href = '#';
        link.textContent = recipe.name;
        link.addEventListener('click', (event) => {
            event.preventDefault();
            displayVideo(recipe.video); 
        });
        subLinkDiv.appendChild(link);

        return subLinkDiv;
    }

    //To list the items under each category
    function handleCategoryClick(event) {
        const category = event.target.id.split('-')[0]; 
        
        subLinksDiv.innerHTML = '';
        videoContentDiv.innerHTML = '';

        
        categoryButtons.forEach(button => {
            button.classList.remove('active');
        });
        event.target.classList.add('active');  
        generateSubLinks(category);
    }

    
    categoryButtons.forEach(button => {
        button.addEventListener('click', handleCategoryClick);  
    });

    
    document.getElementById('feedback-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const guestName = document.getElementById('guest-name').value.trim();
        const guestEmail = document.getElementById('guest-email').value.trim();
        const guestFeedback = document.getElementById('guest-feedback').value.trim();

        if (guestName && guestEmail && guestFeedback) {
            alert('Thank you for your feedback!');
           
            document.getElementById('feedback-form').reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

   
    window.addEventListener('load', () => {
        console.log('Page loaded:', window.location.href); 
    });

    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM fully loaded and parsed'); 
    });
});
