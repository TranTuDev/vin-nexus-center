// window.addEventListener("load", () => {
//     console.log("✅ GSAP INIT");

//     // ====================== CHECK GSAP ======================
//     if (typeof gsap === "undefined") {
//         console.error("❌ GSAP chưa load");
//         return;
//     }

//     if (typeof ScrollTrigger !== "undefined") {
//         gsap.registerPlugin(ScrollTrigger);
//     } else {
//         console.warn("⚠️ ScrollTrigger chưa load");
//     }

//     // ====================== SPLIT TEXT ======================
//     function splitText(el) {
//         if (!el || el.dataset.split) return;

//         const text = el.textContent.trim();
//         if (!text) return;

//         const words = text.split(/\s+/);
//         let html = "";

//         words.forEach((word, wi) => {
//             html += `<span class="word">`;

//             for (let char of word) {
//                 html += `<span class="char">${char}</span>`;
//             }

//             html += `</span>`;
//             if (wi < words.length - 1) html += " ";
//         });

//         el.innerHTML = html;
//         el.dataset.split = "true";
//     }

//     // ====================== HEADER MENU ======================
//     document.querySelectorAll(".header__menu-link").forEach(link => {
//         // nếu có span thì split span, không thì split luôn link
//         const target = link.querySelector("span") || link;

//         splitText(target);

//         const chars = link.querySelectorAll(".char");
//         if (!chars.length) return;

//         link.addEventListener("mouseenter", () => {
//             gsap.to(chars, {
//                 y: -10,
//                 stagger: 0.04,
//                 duration: 0.3,
//                 ease: "power2.out"
//             });
//         });

//         link.addEventListener("mouseleave", () => {
//             gsap.to(chars, {
//                 y: 0,
//                 stagger: 0.04,
//                 duration: 0.3,
//                 ease: "power2.out"
//             });
//         });
//     });

//     // ====================== HEADING ANIMATION ======================
//     document.querySelectorAll(".heading__title, .section-title").forEach(title => {
//         splitText(title);

//         const chars = title.querySelectorAll(".char");
//         if (!chars.length) return;

//         gsap.set(chars, {
//             y: 50,
//             opacity: 0
//         });

//         gsap.timeline({
//             scrollTrigger: {
//                 trigger: title,
//                 start: "top 80%",
//                 once: true,
//                 invalidateOnRefresh: true,
//                 // bật cái này nếu muốn debug
//                 // markers: true
//             }
//         }).to(chars, {
//             y: 0,
//             opacity: 1,
//             duration: 0.5,
//             ease: "power3.out",
//             stagger: 0.02
//         });
//     });

//     // ====================== OPTIONAL FUNCTION ======================
//     if (typeof initLineHighlights === "function") {
//         setTimeout(() => {
//             try {
//                 initLineHighlights();
//             } catch (err) {
//                 console.error("❌ initLineHighlights lỗi:", err);
//             }
//         }, 300);
//     }
// });
