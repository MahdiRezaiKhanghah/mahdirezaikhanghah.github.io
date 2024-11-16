 function toggleMenu() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
}

    // بستن منو با کلیک روی دکمه ضربدر یا بیرون منو
    document.addEventListener('click', function(event) {
    const navbar = document.querySelector(".navbar");
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    // بررسی اینکه کاربر خارج از منو کلیک کرده باشد
    if (navbar.classList.contains('active') && !navbar.contains(event.target) && event.target !== hamburgerMenu) {
    navbar.classList.remove('active');
}
});

    // دکمه ضربدر برای بستن منو
    document.querySelector(".close-btn").addEventListener('click', function() {
    document.querySelector(".navbar").classList.remove("active");
});


 function toggleAboutText() {
     const fullText = document.querySelector(".about-text-full");
     const button = document.querySelector(".show-more-btn");

     // اگر متن کامل مخفی است، آن را نشان بده
     if (fullText.style.display === "none" || fullText.style.display === "") {
         fullText.style.display = "block";
         button.textContent = "Show Less"; // تغییر متن دکمه به "کمتر نشان بده"
     } else {
         fullText.style.display = "none";
         button.textContent = "Show More"; // تغییر متن دکمه به "بیشتر نشان بده"
     }
 }



 // JavaScript code for managing the image gallery for each section

 // Object to hold current photo index for each section
 const photoIndices = {
     school: 0,
     university: 0,
     future: 0,
 };

 // Function to go to the previous photo
 function prevPhoto(section) {
     const photos = document.querySelectorAll(`.${section}-gallery img`);
     photoIndices[section] = (photoIndices[section] - 1 + photos.length) % photos.length;
     updatePhotoDisplay(section);
 }

 // Function to go to the next photo
 function nextPhoto(section) {
     const photos = document.querySelectorAll(`.${section}-gallery img`);
     photoIndices[section] = (photoIndices[section] + 1) % photos.length;
     updatePhotoDisplay(section);
 }

 // Function to update the displayed photo based on the current index
 function updatePhotoDisplay(section) {
     const photos = document.querySelectorAll(`.${section}-gallery img`);
     photos.forEach((photo, index) => {
         photo.style.display = index === photoIndices[section] ? 'block' : 'none';
     });
 }

 // Initialize the display for each section's gallery to show only the first image
 function initializeGalleries() {
     document.querySelectorAll('.education-gallery').forEach(gallery => {
         const photos = gallery.querySelectorAll('img');
         photos.forEach((photo, index) => {
             photo.style.display = index === 0 ? 'block' : 'none';
         });
     });
 }

 // Call initialize function when page loads
 window.onload = initializeGalleries;


 // Function to detect when an element is in view
 function isInView(element) {
     const rect = element.getBoundingClientRect();
     return rect.top >= 0 && rect.bottom <= window.innerHeight;
 }

 // Detect scroll event
 window.addEventListener('scroll', function() {
     const workItems = document.querySelectorAll('.work-item');

     workItems.forEach(function(item) {
         if (isInView(item)) {
             item.classList.add('show');
         } else {
             item.classList.remove('show');
         }
     });
 });


