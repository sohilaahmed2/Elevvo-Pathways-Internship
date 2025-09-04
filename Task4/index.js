const posts = [
  { title: "complaint and Suggestions Web site", category: "Web", image: "complaintandsuggestions.jpg", desc: "web application built with Django that helps users submit and track complaints online. The system allows users to register and log in, submit complaints with details, and track their status. Admins can view all complaints, update their status (pending, in progress, resolved), and manage user accounts.", date: "2024-07-30" , link: "https://complaintandsuggestions.vercel.app/"},
  { title: "Home Services Booking website ", category: "Web", image: "AlaEltalb.jpg", desc: "A full-stack web application built using ASP.NET Core that allows users to request various household services such as plumbing, electrical work, cleaning, and maintenance.", date: "2025-03-30", link: "https://github.com/sohilaahmed2/AlaElTalab.git" },
  { title: "Hospital Management System", category: "Console App", image: "Hospital.jpg", desc: "A hospital management system using dynamic data structures in C++.", date: "2024-10-5", link: "https://github.com/sohilaahmed2/Hospital-Management-System.git" },
  { title: "Future Academy Website", category: "Web", image: "future.png", desc: "Educational platform that serves as the official online presence of the academy.", date: "2024-06-15" ,link : "https://github.com/sohilaahmed2/Future-Academy-Website-.git"},
  { title: "Geometric Calculator", category: "Console App", image: "Geometric-Calculator.jpg", desc: "Java console application that calculates the area and perimeter of basic 2D shapes such as triangle, square, and rectangle.", date: "2023-12-25" ,link: "#"},
  { title: "3 input majority circuit", category: "Hardware", image: "Threeinput.jpg", desc: "digital logic circuit that produces an output of 1 (true) if at least two or more inputs are 1. It has three inputs (A, B, C) and one output.", date: "2023-05-20", link: "#" },
];

const postsPerPage = 3;
let currentPage = 1;
let currentCategory = "all";

function renderPosts() {
  document.getElementById("page-number").textContent = currentPage;
  const blogContainer = document.getElementById("blogContainer");
  blogContainer.innerHTML = "";

  const filteredPosts = currentCategory === "all"
    ? posts
    : posts.filter(p => p.category === currentCategory);

  const start = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(start, start + postsPerPage);

  paginatedPosts.forEach(post => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
  <div class="image-wrapper">
    <img src="${post.image}" alt="${post.title}">
    <div class="overlay">
      <a href="${post.link}" class="hover-button" target="_blank">Visit</a>
    </div>
  </div>
  <div class="card-content">
    <h3>${post.title}</h3>
    <p>${post.desc}</p>
    <div class="date">${post.date} | ${post.category}</div>
  </div>
`;


    blogContainer.appendChild(card);
  });

  renderPagination(filteredPosts.length);
}

function nextPage() {
  const filtered = currentCategory === 'all'
    ? posts
    : posts.filter(post => post.category === currentCategory);

  if (currentPage * postsPerPage < filtered.length) {
    currentPage++;
    renderPosts();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderPosts();
  }
}
function filterPosts(category) {
  currentCategory = category;
  currentPage = 1;

  document.querySelectorAll(".filter button").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  renderPosts();
}

renderPosts();