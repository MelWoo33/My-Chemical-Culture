// Homepage Javascript 
const productContainers = [...document.querySelectorAll('.product-container')];
	//Next button
	const nextBtn = [...document.querySelectorAll('.next-btn')];
	//Previous button
	const preBtn = [...document.querySelectorAll('.prev-btn')];
	
	productContainers.forEach((item, i) => {
		let containerDimensions = item.getBoundingClientRect();
		let containerWidth = containerDimensions.width;
		
		//Each time button is pressed it moves images across by the size of the container
		nextBtn[i].addEventListener('click', () => {
			item.scrollLeft += containerWidth;
		})
		preBtn[i].addEventListener('click', () => {
			item.scrollLeft -= containerWidth;
		})
	})

	// Available discount values with higher chance for 5%
const discounts = [5, 5, 5, 5, 10, 15, 20]; // More 5% cards to increase probability

// Shuffle function to randomize the array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the discount percentages
const shuffledDiscounts = shuffle(discounts.slice());

let cardClicked = false; // To prevent multiple clicks

// Function to generate a random discount code
function generateDiscountCode(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        code += chars[randomIndex];
    }
    return code;
}

// Function to flip the card and reveal the discount
function flipCard(card) {
    if (cardClicked) return; // If a card has been clicked, do nothing

    const index = Array.from(document.querySelectorAll('.card')).indexOf(card);
    const discount = shuffledDiscounts[index];

    // Reveal discount on the back of the card
    card.querySelector('.card-back p').textContent = discount + "% OFF";

    // Add 'flipped' class to the card
    card.classList.add('flipped');

    // Disable further clicks
    cardClicked = true;

    // Add blur to other cards
    document.querySelector('.cards').classList.add('blur');

    // Display congratulations message
    const messageDiv = document.getElementById('congratulations-message');
    messageDiv.textContent = `Congratulations, you've won ${discount}% off your purchase!`;

    // Generate and display the discount code
    const discountCode = generateDiscountCode(8);
    const codeDiv = document.getElementById('discount-code');
    codeDiv.textContent = `Your discount code: ${discountCode}`;
    codeDiv.classList.remove('hidden'); // Show the discount code box

    // Show the claim button
    document.getElementById('claim-button').classList.remove('hidden');
}

// Function to handle claim button click
function claimDiscount() {
    alert("Your discount has been claimed!"); // Replace with desired action
}


// Show the popup after 3 seconds
window.onload = function() {
    setTimeout(function() {
        var myModal = new bootstrap.Modal(document.getElementById('discountModal'));
        myModal.show();
    }, 3000);
}


// Product pages Javascript
const sizeBoxes = document.querySelectorAll('.size-box');
	sizeBoxes.forEach(box => {
		box.addEventListener('click', () => {
			// Remove 'selected' class from all size boxes
			sizeBoxes.forEach(b => b.classList.remove('selected'));
			// Add 'selected' class to the clicked size box
			box.classList.add('selected');


		});
	});
	const smallPhotos = document.querySelectorAll('.small-photo');
	const mainPhoto = document.querySelector('.main-photo');

	// Each click makes the image change
	smallPhotos.forEach(photo => {
		photo.addEventListener('click', () => {
			const tempSrc = mainPhoto.src;
			mainPhoto.src = photo.src;
			photo.src = tempSrc;
		});
	});

// Javascript for contact form
document.getElementById("contact-form").addEventListener("submit", function (event) {
	event.preventDefault();
	// Show thank you message
	document.getElementById("thank-you-message").style.display = "block";
	// Reset form
	document.getElementById("contact-form").reset();
	
});
