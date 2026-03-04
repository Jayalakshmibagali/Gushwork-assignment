// document.addEventListener("DOMContentLoaded", () => {
//   /* ================= MOBILE MENU ================= */
//   const menuBtn = document.getElementById("menuBtn");
//   const mobileMenu = document.getElementById("mobileMenu");
//   menuBtn?.addEventListener("click", () => mobileMenu?.classList.toggle("hidden"));

//   /* ================= MOBILE PRODUCT DROPDOWN ================= */
//   const mobileProductBtn = document.getElementById("mobileProductBtn");
//   const mobileProductMenu = document.getElementById("mobileProductMenu");
//   const mobileArrow = document.getElementById("mobileArrow");
//   mobileProductBtn?.addEventListener("click", () => {
//     mobileProductMenu?.classList.toggle("hidden");
//     if (mobileArrow) mobileArrow.textContent = mobileProductMenu?.classList.contains("hidden") ? "+" : "-";
//   });

//   /* ================= CAROUSEL ================= */
//   const mainImage = document.getElementById("mainImage");
//   const thumbnails = document.querySelectorAll(".thumb");
//   const prevBtn = document.getElementById("prevBtn");
//   const nextBtn = document.getElementById("nextBtn");

//   const images = [
//     "/assets/images/section1/banner_img1.jpg",
//     "/assets/images/section1/banner_img2.jpg",
//     "/assets/images/section1/banner_img3.jpg",
//     "/assets/images/section1/banner_img4.jpg",
//     "/assets/images/section1/banner_img5.jpg",
//   ];

//   let currentIndex = 0;

//   const updateImage = (index) => {
//     if (!mainImage) return;
//     mainImage.src = images[index];
//     thumbnails.forEach((thumb, i) => {
//       thumb.classList.toggle("border-brand", i === index);
//       thumb.classList.toggle("border-transparent", i !== index);
//     });
//     currentIndex = index;
//   };

//   nextBtn?.addEventListener("click", () => updateImage((currentIndex + 1) % images.length));
//   prevBtn?.addEventListener("click", () => updateImage((currentIndex - 1 + images.length) % images.length));

//   thumbnails.forEach((thumb, i) => thumb.addEventListener("click", () => updateImage(i)));

//   // Auto slide
//   setInterval(() => updateImage((currentIndex + 1) % images.length), 5000);

//   /* ================= SCROLL REVEAL (IntersectionObserver) ================= */
//   const revealElements = document.querySelectorAll(".fade-up, .fade-left, .fade-right");

//   const revealObserver = new IntersectionObserver(
//     (entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//           observer.unobserve(entry.target); // stop observing after reveal
//         }
//       });
//     },
//     { threshold: 0.1 }
//   );

//   revealElements.forEach(el => revealObserver.observe(el));
// });

// // collapse
// document.addEventListener("DOMContentLoaded", () => {
//   const items = document.querySelectorAll(".spec-item");

//   items.forEach((item) => {
//     const arrowWrapper = item.querySelector(".toggle-arrow");
//     const arrowImg = arrowWrapper.querySelector("img");
//     const contentWrapper = item.querySelector(".spec-content");
//     const paragraph = contentWrapper.querySelector("p");

//     // Set content from data attribute
//     paragraph.textContent = item.dataset.content;

//     item.addEventListener("click", () => {
//       const isOpen =
//         contentWrapper.style.maxHeight &&
//         contentWrapper.style.maxHeight !== "0px";

//       if (isOpen) {
//         // Collapse
//         contentWrapper.style.maxHeight = "0px";
//         arrowImg.style.transform = "rotate(90deg)";
//         arrowWrapper.classList.remove("bg-[#FFF1F2]");
//         arrowWrapper.classList.add("bg-[#F1F2F3]");
//       } else {
//         // Expand
//         contentWrapper.style.maxHeight =
//           contentWrapper.scrollHeight + "px";
//         arrowImg.style.transform = "rotate(270deg)";
//         arrowWrapper.classList.remove("bg-[#F1F2F3]");
//         arrowWrapper.classList.add("bg-[#FFF1F2]");
//       }
//     });
//   });
// });


// /* Carousel  for Versatile Applications Across Industries*/


// document.addEventListener("DOMContentLoaded", function () {

//   const track = document.getElementById("carouselTrack");
//   const cards = document.querySelectorAll("#carouselTrack > div");
//   const nextBtn = document.getElementById("industryNextBtn");
//   const prevBtn = document.getElementById("industryPrevBtn");

//   if (!track || !nextBtn || !prevBtn) return;

//   let index = 0;

//   function updateCarousel() {
//     const cardWidth = cards[0].offsetWidth + 24;
//     track.style.transform = `translateX(-${index * cardWidth}px)`;
//   }

//   nextBtn.addEventListener("click", () => {
//     if (index < cards.length - 1) {
//       index++;
//       updateCarousel();
//     }
//   });

//   prevBtn.addEventListener("click", () => {
//     if (index > 0) {
//       index--;
//       updateCarousel();
//     }
//   });

//   window.addEventListener("resize", updateCarousel);

// });


// /* Tabs */


// document.addEventListener("DOMContentLoaded", function () {

//   const tabs = document.querySelectorAll(".tab");
//   const text = document.getElementById("processText");
//   const image = document.getElementById("processImage");
//   const progressLine = document.getElementById("progressLine");

//   const data = {
//     raw: {
//       title: "High-Grade Raw Material Selection",
//       content: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
//       image: "/assets/images/section1/banner_img1.jpg",
//       list: [
//         "PE100 grade material",
//         "Optimal molecular weight distribution"
//       ]
//     },

//     extrusion: {
//       title: "Precision Extrusion Process",
//       content: "Advanced extrusion machines ensure consistent pipe formation.",
//       image: "/assets/images/section1/banner_img2.jpg",
//       list: [
//         "High torque screw design",
//         "Uniform melt consistency",
//         "Automated temperature control"
//       ]
//     },

//     cooling: {
//       title: "Controlled Cooling",
//       content: "Cooling tanks stabilize pipe dimensions.",
//       image: "/assets/images/section1/banner_img3.jpg",
//       list: [
//         "Multi-stage cooling tanks",
//         "Uniform temperature balance"
//       ]
//     },

//     sizing: {
//       title: "Accurate Sizing",
//       content: "Sizing ensures uniform wall thickness.",
//       image: "/assets/images/section1/banner_img4.jpg",
//       list: [
//         "Vacuum calibration",
//         "Precise diameter control"
//       ]
//     },

//     quality: {
//       title: "Strict Quality Control",
//       content: "Each pipe undergoes pressure testing.",
//       image: "/assets/images/section1/banner_img5.jpg",
//       list: [
//         "Hydrostatic pressure testing",
//         "Dimensional inspection",
//         "ISO compliance check"
//       ]
//     },
//       marking: {
//       title: "Strict Quality Control",
//       content: "Each pipe undergoes pressure testing.",
//       image: "/assets/images/section1/banner_img5.jpg",
//       list: [
//         "Hydrostatic pressure testing",
//         "Dimensional inspection",
//         "ISO compliance check"
//       ]
//     },
//      cutting: {
//       title: "Strict Quality Control",
//       content: "Each pipe undergoes pressure testing.",
//       image: "/assets/images/section1/banner_img5.jpg",
//       list: [
//         "Hydrostatic pressure testing",
//         "Dimensional inspection",
//         "ISO compliance check"
//       ]
//     },
//      packaging: {
//       title: "Strict Quality Control",
//       content: "Each pipe undergoes pressure testing.",
//       image: "/assets/images/section1/banner_img5.jpg",
//       list: [
//         "Hydrostatic pressure testing",
//         "Dimensional inspection",
//         "ISO compliance check"
//       ]
//     }
//   };

//   tabs.forEach((tab, index) => {

//     tab.addEventListener("click", () => {

//       // Reset tabs
//       tabs.forEach(t => {
//         t.classList.remove("bg-[#2E3A8C]", "text-white");
//         t.classList.add("bg-[#F1F2F3]");
//       });

//       tab.classList.add("bg-[#2E3A8C]", "text-white");
//       tab.classList.remove("bg-[#F1F2F3]");

//       // Update progress line
//       const percentage = (index / (tabs.length - 1)) * 100;
//       progressLine.style.width = percentage + "%";

//       const key = tab.dataset.tab;
//       const current = data[key];

//       // Fade out
//       text.style.opacity = 0;
//       image.style.opacity = 0;

//       setTimeout(() => {

//         // Update Text + List
//         text.innerHTML = `
//           <h3 class="text-2xl font-semibold mb-4">${current.title}</h3>
//           <p class="text-gray-600 mb-4">${current.content}</p>
//           <ul class="space-y-4">
//             ${current.list.map(item => `
//               <li class="flex items-start gap-3">
//                 <img src="/assets/images/section1/check_circle.svg"
//                      class="w-5 h-5 mt-1 flex-shrink-0" />
//                 <span>${item}</span>
//               </li>
//             `).join("")}
//           </ul>
//         `;

//         // Update Image
//         image.src = current.image;

//         // Fade in
//         text.style.opacity = 1;
//         image.style.opacity = 1;

//       }, 200);

//     });
//     if(tabs.length>0){
//         tabs[0].click()
//     }

//   });

// });

// //POP-UP FOR DOWNLOAD SHEET

// // ELEMENTS
// const emailInput = document.getElementById("email");
// const contactInput = document.getElementById("contact");
// const downloadBtn = document.getElementById("downloadBtn");
// const emailError = document.getElementById("emailError");
// const contactError = document.getElementById("contactError"); // New

// // REGEX PATTERNS
// const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
// const phonePattern = /^(\+?\d{1,3})?[-.\s]?\d{10,14}$/;

// // HELPER: VALIDATE BOTH FIELDS
// function validateForm() {
//   const isEmailValid = emailPattern.test(emailInput.value.trim());
//   const contactValue = contactInput.value.trim();
  
//   // Valid if: it's empty OR it matches the phone pattern
//   const isContactValid = contactValue === "" || phonePattern.test(contactValue);

//   // Enable button only if both are good
//   downloadBtn.disabled = !(isEmailValid && isContactValid);
// }

// // EMAIL LIVE VALIDATION
// emailInput.addEventListener("input", function () {
//   const isValid = emailPattern.test(this.value.trim());

//   if (isValid || this.value.length === 0) {
//     emailError.classList.add("hidden");
//     this.classList.remove("border-red-500");
//   } else if (this.value.length > 5) {
//     emailError.classList.remove("hidden");
//     this.classList.add("border-red-500");
//   }
//   validateForm();
// });

// // CONTACT LIVE VALIDATION
// contactInput.addEventListener("input", function () {
//   const value = this.value.trim();
//   const isValid = value === "" || phonePattern.test(value);

//   if (isValid) {
//     contactError.classList.add("hidden");
//     this.classList.remove("border-red-500");
//   } else {
//     contactError.classList.remove("hidden");
//     this.classList.add("border-red-500");
//   }
//   validateForm();
// });

// // FORM SUBMIT
// document.getElementById("downloadForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const formData = {
//     email: emailInput.value.trim(),
//     contact: contactInput.value.trim(),
//     date: new Date().toISOString(),
//   };

//   localStorage.setItem("brochureRequest", JSON.stringify(formData));
//   alert("Thank you! Brochure request saved.");

//   this.reset();
//   validateForm(); // Re-disables button
//   closeModal("downloadModal");
// });

// // MODAL FUNCTIONS (Keep these as you had them)
// function openModal(id) {
//   document.getElementById(id).classList.replace("hidden", "flex");
//   document.body.classList.add("overflow-hidden");
// }

// function closeModal(id) {
//   document.getElementById(id).classList.replace("flex", "hidden");
//   document.body.classList.remove("overflow-hidden");
// }


// // REQUEST POP_UP
// /* ============================================================
//    REQUEST CALLBACK MODAL LOGIC
//    ============================================================ */

// // DOM Elements
// const requestForm = document.getElementById("requestForm");
// const submitBtn = document.getElementById("submitBtn");

// const inputs = {
//   fullName: document.getElementById("fullName"),
//   companyName: document.getElementById("companyName"),
//   email: document.getElementById("email"),
//   contact: document.getElementById("contact")
// };

// const errors = {
//   email: document.getElementById("emailError"),
//   contact: document.getElementById("contactError")
// };

// // Regex Patterns
// const patterns = {
//   email: /^[^ ]+@[^ ]+\.[a-z]{2,}$/,
//   phone: /^[0-9]{10,14}$/
// };

// // Open Modal Function
// window.openModal = function(id) {
//   const el = document.getElementById(id);
//   if (el) {
//     el.classList.replace("hidden", "flex");
//     document.body.classList.add("overflow-hidden");
//   }
// };

// // Close Modal Function
// window.closeModal = function(id) {
//   const el = document.getElementById(id);
//   if (el) {
//     el.classList.replace("flex", "hidden");
//     document.body.classList.remove("overflow-hidden");
//   }
// };

// /**
//  * Validates the entire form and enables/disables the submit button
//  */
// function validateForm() {
//   const isNameValid = inputs.fullName.value.trim().length >= 2;
//   const isCompanyValid = inputs.companyName.value.trim().length >= 2;
//   const isEmailValid = patterns.email.test(inputs.email.value.trim());
//   const isPhoneValid = patterns.phone.test(inputs.contact.value.trim());

//   // Submit button is only enabled if all conditions are met
//   submitBtn.disabled = !(isNameValid && isCompanyValid && isEmailValid && isPhoneValid);
// }

// // Attach Live Validation Listeners
// Object.values(inputs).forEach(input => {
//   input.addEventListener("input", function() {
//     const value = this.value.trim();

//     // EMAIL SPECIFIC FEEDBACK
//     if (this.id === "email") {
//       const isValid = patterns.email.test(value);
//       // Show error if invalid AND field is not empty
//       if (!isValid && value !== "") {
//         errors.email.classList.remove("hidden");
//         this.classList.add("border-red-500");
//       } else {
//         errors.email.classList.add("hidden");
//         this.classList.remove("border-red-500");
//       }
//     }

//     // CONTACT SPECIFIC FEEDBACK
//     if (this.id === "contact") {
//       const isValid = patterns.phone.test(value);
//       // Show error if invalid AND field is not empty
//       if (!isValid && value !== "") {
//         errors.contact.classList.remove("hidden");
//         this.classList.add("border-red-500");
//       } else {
//         errors.contact.classList.add("hidden");
//         this.classList.remove("border-red-500");
//       }
//     }

//     validateForm();
//   });
// });

// // Submit Handler
// requestForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const formData = {
//     fullName: inputs.fullName.value.trim(),
//     company: inputs.companyName.value.trim(),
//     email: inputs.email.value.trim(),
//     phone: inputs.contact.value.trim(),
//     date: new Date().toISOString(),
//   };

//   // Store locally
//   localStorage.setItem("callbackRequest", JSON.stringify(formData));

//   alert("Thank you! We will call you back soon.");

//   // Reset form state
//   this.reset();
//   validateForm(); 
//   closeModal("requestModal");
// // })

document.addEventListener("DOMContentLoaded", () => {
  /* ================= 1. NAVIGATION & GENERAL UI ================= */
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  menuBtn?.addEventListener("click", () => mobileMenu?.classList.toggle("hidden"));

  const mobileProductBtn = document.getElementById("mobileProductBtn");
  const mobileProductMenu = document.getElementById("mobileProductMenu");
  const mobileArrow = document.getElementById("mobileArrow");
  mobileProductBtn?.addEventListener("click", () => {
    mobileProductMenu?.classList.toggle("hidden");
    if (mobileArrow) mobileArrow.textContent = mobileProductMenu?.classList.contains("hidden") ? "+" : "-";
  });

  /* ================= 2. MAIN CAROUSEL ================= */
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumb");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const images = [
    "/assets/images/section1/banner_img1.jpg",
    "/assets/images/section1/banner_img2.jpg",
    "/assets/images/section1/banner_img3.jpg",
    "/assets/images/section1/banner_img4.jpg",
    "/assets/images/section1/banner_img5.jpg",
  ];

  let currentIndex = 0;

  const updateImage = (index) => {
    if (!mainImage) return;
    mainImage.src = images[index];
    thumbnails.forEach((thumb, i) => {
      thumb.classList.toggle("border-brand", i === index);
      thumb.classList.toggle("border-transparent", i !== index);
    });
    currentIndex = index;
  };

  nextBtn?.addEventListener("click", () => updateImage((currentIndex + 1) % images.length));
  prevBtn?.addEventListener("click", () => updateImage((currentIndex - 1 + images.length) % images.length));
  thumbnails.forEach((thumb, i) => thumb.addEventListener("click", () => updateImage(i)));

  setInterval(() => updateImage((currentIndex + 1) % images.length), 5000);

  /* ================= 3. SCROLL REVEAL ================= */
  const revealElements = document.querySelectorAll(".fade-up, .fade-left, .fade-right");
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealElements.forEach(el => revealObserver.observe(el));

  /* ================= 4. ACCORDION / COLLAPSE ================= */
  const specItems = document.querySelectorAll(".spec-item");
  specItems.forEach((item) => {
    const arrowWrapper = item.querySelector(".toggle-arrow");
    const arrowImg = arrowWrapper?.querySelector("img");
    const contentWrapper = item.querySelector(".spec-content");
    const paragraph = contentWrapper?.querySelector("p");

    if (paragraph) paragraph.textContent = item.dataset.content;

    item.addEventListener("click", () => {
      const isOpen = contentWrapper.style.maxHeight && contentWrapper.style.maxHeight !== "0px";
      if (isOpen) {
        contentWrapper.style.maxHeight = "0px";
        if (arrowImg) arrowImg.style.transform = "rotate(90deg)";
        arrowWrapper?.classList.replace("bg-[#FFF1F2]", "bg-[#F1F2F3]");
      } else {
        contentWrapper.style.maxHeight = contentWrapper.scrollHeight + "px";
        if (arrowImg) arrowImg.style.transform = "rotate(270deg)";
        arrowWrapper?.classList.replace("bg-[#F1F2F3]", "bg-[#FFF1F2]");
      }
    });
  });

  /* ================= 5. INDUSTRY CAROUSEL ================= */
  const track = document.getElementById("carouselTrack");
  const cards = document.querySelectorAll("#carouselTrack > div");
  const indNextBtn = document.getElementById("industryNextBtn");
  const indPrevBtn = document.getElementById("industryPrevBtn");

  if (track && indNextBtn && indPrevBtn && cards.length > 0) {
    let indIndex = 0;
    const updateIndCarousel = () => {
      const cardWidth = cards[0].offsetWidth + 24;
      track.style.transform = `translateX(-${indIndex * cardWidth}px)`;
    };
    indNextBtn.addEventListener("click", () => { if (indIndex < cards.length - 1) { indIndex++; updateIndCarousel(); } });
    indPrevBtn.addEventListener("click", () => { if (indIndex > 0) { indIndex--; updateIndCarousel(); } });
    window.addEventListener("resize", updateIndCarousel);
  }

  /* ================= 6. TABS LOGIC (FIXED) ================= */
  const tabs = document.querySelectorAll(".tab");
  const processText = document.getElementById("processText");
  const processImage = document.getElementById("processImage");
  const progressLine = document.getElementById("progressLine");

  const tabData = {
    raw: { 
      title: "High-Grade Raw Material Selection", 
      content: "We use premium PE100 grade materials to ensure high pressure resistance and longevity.", 
      image: "/assets/images/section1/banner_img1.jpg", 
      list: ["PE100 high-density polyethylene", "Superior stress crack resistance"] 
    },
    extrusion: { 
      title: "Precision Extrusion Process", 
      content: "Advanced extrusion technology ensures consistent wall thickness and structural integrity.", 
      image: "/assets/images/section1/banner_img2.jpg", 
      list: ["High torque screw design", "Uniform melt temperature control"] 
    },
    cooling: { 
      title: "Controlled Cooling", 
      content: "Multi-stage vacuum cooling tanks stabilize the pipe dimensions rapidly.", 
      image: "/assets/images/section1/banner_img3.jpg", 
      list: ["Vacuum calibration", "Efficient heat dissipation"] 
    },
    sizing: { 
      title: "Accurate Sizing", 
      content: "Sizing sleeves ensure the outer diameter meets strict international standards.", 
      image: "/assets/images/section1/banner_img4.jpg", 
      list: ["Precise diameter control", "Uniform wall thickness"] 
    },
    quality: { 
      title: "Strict Quality Control", 
      content: "Every batch is tested for pressure, impact, and dimensional accuracy.", 
      image: "/assets/images/section1/banner_img5.jpg", 
      list: ["Hydrostatic pressure testing", "ISO & ASTM compliance"] 
    },
    marking: { 
      title: "Permanent Marking", 
      content: "Inkjet or laser marking provides clear traceability for every meter of pipe.", 
      image: "/assets/images/section1/banner_img1.jpg", 
      list: ["Traceable batch numbers", "Standardized specifications"] 
    },
    cutting: { 
      title: "Precision Cutting", 
      content: "Automated swarfless cutters ensure clean, square ends for easy jointing.", 
      image: "/assets/images/section1/banner_img2.jpg", 
      list: ["Chip-free cutting", "Custom length accuracy"] 
    },
    packaging: { 
      title: "Secure Packaging", 
      content: "Pipes are bundled and protected to prevent any damage during transit.", 
      image: "/assets/images/section1/banner_img3.jpg", 
      list: ["Protective end caps", "Secure transport bundling"] 
    }
  };

  tabs.forEach((tab, idx) => {
    tab.addEventListener("click", () => {
      // Update Tab Styles
      tabs.forEach(t => {
        t.classList.remove("bg-[#2E3A8C]", "text-white");
        t.classList.add("bg-[#F1F2F3]");
      });
      tab.classList.add("bg-[#2E3A8C]", "text-white");
      tab.classList.remove("bg-[#F1F2F3]");
      
      // Update Progress Line
      if (progressLine) {
        progressLine.style.width = (idx / (tabs.length - 1)) * 100 + "%";
      }
      
      const key = tab.dataset.tab;
      const current = tabData[key];
      
      if (processText && processImage && current) {
        // Simple Fade Transition
        processText.style.opacity = 0;
        processImage.style.opacity = 0;
        
        setTimeout(() => {
          processText.innerHTML = `
            <h3 class="text-2xl font-semibold mb-4">${current.title}</h3>
            <p class="text-gray-600 mb-4">${current.content}</p>
            <ul class="space-y-4">
              ${current.list.map(li => `
                <li class="flex items-start gap-3">
                  <img src="/assets/images/section1/check_circle.svg" class="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>${li}</span>
                </li>
              `).join("")}
            </ul>
          `;
          processImage.src = current.image;
          processText.style.opacity = 1;
          processImage.style.opacity = 1;
        }, 200);
      }
    });
  });

  // Initialize first tab
  if (tabs.length > 0) tabs[0].click();
});

/* ============================================================
   7. FORM VALIDATION (Encapsulated)
   ============================================================ */

// Form 1: Download Brochure
(function() {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("downloadForm");
    if (!form) return;

    const emailInp = form.querySelector("#email");
    const contactInp = form.querySelector("#contact");
    const submitBtn = document.getElementById("downloadBtn");
    const emailErr = document.getElementById("emailError");
    const contactErr = document.getElementById("contactError");

    const validate = () => {
      const emailValid = /^[^ ]+@[^ ]+\.[a-z]{2,}$/.test(emailInp.value.trim());
      const contactValid = contactInp.value.trim() === "" || /^(\+?\d{1,3})?[-.\s]?\d{10,14}$/.test(contactInp.value.trim());
      if(submitBtn) submitBtn.disabled = !(emailValid && contactValid);
    };

    emailInp?.addEventListener("input", () => {
      const isValid = /^[^ ]+@[^ ]+\.[a-z]{2,}$/.test(emailInp.value.trim());
      emailErr?.classList.toggle("hidden", isValid || emailInp.value.length === 0);
      validate();
    });

    contactInp?.addEventListener("input", () => {
      const isValid = contactInp.value.trim() === "" || /^(\+?\d{1,3})?[-.\s]?\d{10,14}$/.test(contactInp.value.trim());
      contactErr?.classList.toggle("hidden", isValid);
      validate();
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      localStorage.setItem("brochureRequest", JSON.stringify({ email: emailInp.value, contact: contactInp.value, date: new Date().toISOString() }));
      alert("Brochure request saved.");
      form.reset();
      validate();
      closeModal("downloadModal");
    });
  });
})();

// Form 2: Request Callback
(function() {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("requestForm");
    if (!form) return;

    const fields = {
      name: form.querySelector("#fullName"),
      company: form.querySelector("#companyName"),
      email: form.querySelector("#email"),
      contact: form.querySelector("#contact")
    };
    const submitBtn = document.getElementById("submitBtn");
    const emailErr = form.querySelector("#emailError");
    const contactErr = form.querySelector("#contactError");

    const validate = () => {
      const nameOk = fields.name?.value.trim().length >= 2;
      const compOk = fields.company?.value.trim().length >= 2;
      const emailOk = /^[^ ]+@[^ ]+\.[a-z]{2,}$/.test(fields.email?.value.trim());
      const phoneOk = /^[0-9]{10,14}$/.test(fields.contact?.value.trim());
      if(submitBtn) submitBtn.disabled = !(nameOk && compOk && emailOk && phoneOk);
    };

    Object.values(fields).forEach(input => {
      input?.addEventListener("input", () => {
        if (input.id === "email") emailErr?.classList.toggle("hidden", /^[^ ]+@[^ ]+\.[a-z]{2,}$/.test(input.value.trim()) || input.value === "");
        if (input.id === "contact") contactErr?.classList.toggle("hidden", /^[0-9]{10,14}$/.test(input.value.trim()) || input.value === "");
        validate();
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      localStorage.setItem("callbackRequest", JSON.stringify({ name: fields.name.value, email: fields.email.value, phone: fields.contact.value, date: new Date().toISOString() }));
      alert("We will call you back soon.");
      form.reset();
      validate();
      closeModal("requestModal");
    });
  });
})();

/* ================= 8. GLOBAL MODAL HELPERS ================= */
window.openModal = function(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.replace("hidden", "flex");
    document.body.classList.add("overflow-hidden");
  }
};

window.closeModal = function(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.replace("flex", "hidden");
    document.body.classList.remove("overflow-hidden");
  }
};
/* ================= Form 3: Custom Quote (Side Form) ================= */
(function() {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("quoteForm");
    if (!form) return;

    const fields = {
      name: form.querySelector("#quoteFullName"),
      company: form.querySelector("#quoteCompanyName"),
      email: form.querySelector("#quoteEmail"),
      phone: form.querySelector("#quotePhone")
    };
    
    const submitBtn = document.getElementById("quoteSubmitBtn");
    const emailErr = document.getElementById("quoteEmailError");
    const phoneErr = document.getElementById("quotePhoneError");

    const validate = () => {
      const nameOk = fields.name.value.trim().length >= 2;
      const compOk = fields.company.value.trim().length >= 2;
      const emailOk = /^[^ ]+@[^ ]+\.[a-z]{2,}$/.test(fields.email.value.trim());
      // Matches 10 digits specifically for the placeholder style
      const phoneOk = /^[0-9]{10}$/.test(fields.phone.value.trim());

      if(submitBtn) {
        submitBtn.disabled = !(nameOk && compOk && emailOk && phoneOk);
      }
    };

    // Attach listeners to all fields
    Object.values(fields).forEach(input => {
      input?.addEventListener("input", () => {
        if (input.id === "quoteEmail") {
          const isValid = /^[^ ]+@[^ ]+\.[a-z]{2,}$/.test(input.value.trim());
          emailErr?.classList.toggle("hidden", isValid || input.value === "");
        }
        if (input.id === "quotePhone") {
          const isValid = /^[0-9]{10}$/.test(input.value.trim());
          phoneErr?.classList.toggle("hidden", isValid || input.value === "");
        }
        validate();
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Save data
      const formData = {
        name: fields.name.value,
        company: fields.company.value,
        email: fields.email.value,
        phone: "+91" + fields.phone.value,
        date: new Date().toISOString()
      };
      
      localStorage.setItem("customQuoteRequest", JSON.stringify(formData));
      
      alert("Quote request submitted successfully!");
      form.reset();
      validate(); // Reset button to disabled
    });
  });
})();