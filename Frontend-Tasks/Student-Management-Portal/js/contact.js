document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("alertBox").innerHTML = `
<div class="alert alert-success">
Message Sent Successfully!
</div>
`;

  this.reset();
});
