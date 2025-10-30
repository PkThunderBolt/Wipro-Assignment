const App = (() => {
  const blogList = document.getElementById("blog-list");
  const taskList = document.getElementById("task-list");
  const errorMsg = document.getElementById("error-message");

  const blogs = [];
  const tasks = [];

  const API_URLS = {
    blogs: "https://jsonplaceholder.typicode.com/posts",
    todos: "https://jsonplaceholder.typicode.com/todos",
  };

  // Utility: show errors
  const showError = (message) => {
    errorMsg.textContent = message;
    setTimeout(() => (errorMsg.textContent = ""), 3000);
  };

  // Display functions
  const displayBlogs = () => {
    blogList.innerHTML = blogs
      .map(
        (b) => `
      <li><strong>${b.title}</strong><br>${b.body}</li>
    `
      )
      .join("");
  };

  const displayTasks = () => {
    taskList.innerHTML = tasks
      .map(
        (t) => `
      <li>${t.title} ${t.completed ? "✅" : "❌"}</li>
    `
      )
      .join("");
  };

  // Fetch API functions
  const fetchBlogs = async () => {
    try {
      const res = await fetch(API_URLS.blogs);
      if (!res.ok) throw new Error("Failed to fetch blogs.");
      const data = await res.json();
      blogs.splice(0, blogs.length, ...data.slice(0, 5));
      displayBlogs();
    } catch (err) {
      showError(err.message);
    }
  };

  const fetchTasks = async () => {
    try {
      const res = await fetch(API_URLS.todos);
      if (!res.ok) throw new Error("Failed to fetch todos.");
      const data = await res.json();
      tasks.splice(0, tasks.length, ...data.slice(0, 5));
      displayTasks();
    } catch (err) {
      showError(err.message);
    }
  };

  // Add new blog/task manually
  const addBlog = () => {
    const title = document.getElementById("blog-title").value.trim();
    const body = document.getElementById("blog-body").value.trim();

    if (!title || !body) return showError("Please fill in all blog fields.");

    blogs.unshift({ title, body });
    displayBlogs();
    document.getElementById("blog-title").value = "";
    document.getElementById("blog-body").value = "";
  };

  const addTask = () => {
    const title = document.getElementById("task-title").value.trim();
    if (!title) return showError("Please enter a task.");

    tasks.unshift({ title, completed: false });
    displayTasks();
    document.getElementById("task-title").value = "";
  };

  // Attach Event Listeners
  const init = () => {
    document.getElementById("add-blog").addEventListener("click", addBlog);
    document.getElementById("load-blogs").addEventListener("click", fetchBlogs);
    document.getElementById("add-task").addEventListener("click", addTask);
    document.getElementById("load-tasks").addEventListener("click", fetchTasks);
  };

  return { init };
})();

// Initialize app
document.addEventListener("DOMContentLoaded", App.init);
